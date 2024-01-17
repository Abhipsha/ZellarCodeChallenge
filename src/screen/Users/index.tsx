import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {RadioButton} from '../../components';
import {UserItem} from '../../components/UserItem';
import {listZellerCustomers} from '../../mockdata/user';
import {useQuery} from '@apollo/client';
import {GET_USERS} from '../../query/index';

export const Users = () => {
  const [zellarCustomerList, setZellarCustomer] = useState(
    listZellerCustomers.items,
  );
  const [filteredList, setFilteredList] = useState(listZellerCustomers.items);
  const [filterKeys, setFilterKeys] = useState([]);
  const [selectedVal, setSelectedVal] = useState('Admin');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // const {error, data} = useQuery(GET_USERS, {variables: {id: '1'}});
  useEffect(() => {
    let reducedData: String[] = zellarCustomerList.reduce((acc, curr) => {
      if (!acc.includes(curr.role)) {
        acc.push(curr.role);
      }
      return acc;
    }, []);
    setFilterKeys(reducedData);
    const filteredData = zellarCustomerList.filter(
      item => item.role === selectedVal,
    );
    setFilteredList(filteredData);
  }, []);

  const setValue = val => {
    setSelectedVal(val);
    const filteredData = zellarCustomerList.filter(item => item.role === val);
    setFilteredList(filteredData);
  };

  const renderList = ({item, index}) => {
    return <UserItem name={item.name} role={item.role} />;
  };
  const renderFilterKeys = ({item, index}) => {
    return (
      <RadioButton
        value={item}
        label={item}
        setVal={val => {
          setValue(val);
        }}
        selected={item === selectedVal}
      />
    );
  };
  const onRefreshList = () => {
    setIsRefreshing(!isRefreshing);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userTypesContainerStyle}>
        <Text style={styles.sectionHeadingStyle}>User Types</Text>
        <FlatList
          data={filterKeys}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderFilterKeys}
        />
      </View>
      <View style={{flex: 2}}>
        <Text style={[styles.sectionHeadingStyle, {marginTop: 30}]}>
          {selectedVal + ' Users'}
        </Text>
        <FlatList
          data={filteredList}
          keyExtractor={item => `${item.id}`}
          renderItem={renderList}
          refreshing={isRefreshing}
          onRefresh={onRefreshList}
          contentContainerStyle={styles.usersContainerStyle}
        />
      </View>
    </View>
  );
};
