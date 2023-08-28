import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SetData, DeleteTaskData, AllTaskData} from '../redux/action/Action';
import {Searchbar, Checkbox} from 'react-native-paper';
import {CheckBox} from 'react-native-elements';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch(); //set data
  const user = useSelector(state => state.Reducers.firststate); //get data
  const alltask = useSelector(state => state.Reducers.alltaskstate);

  const handleDelete = id => {
    dispatch(DeleteTaskData(id));
  };

  const Submit = () => {
    navigation.navigate('Details');
  };

  const Editpage = editData => {
    navigation.navigate('Edit', editData);
  };

  const DetailabtTask = data => {
    navigation.navigate('TaskDetails', data);
  };

  const handleSearch = query => {
    setSearch(query);
    // Simulate a search-related action
    console.log('Performing search for:', query);
  };
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  const updateSearch = search => {
    setSearch(search);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innercontainer}>
        <StatusBar
          animated={true}
          backgroundColor="#FFFDF4"
          barStyle="dark-content"
        />
        <View style={styles.header}>
          <View></View>
          <View>
            <Text style={styles.mainTitle}>Home Page</Text>
          </View>
          <View></View>
        </View>
      </View>
      <View style={styles.subinnercontainer}>
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          searchIcon={{size: 24}}
          onChangeText={handleSearch}
          value={search}
          icon={() => <MaterialCommunityIcon name="magnify" size={20} />}
        />
        <View style={styles.taskview}>
          <Text style={styles.presentTask}>Today's task</Text>
        </View>
        <ScrollView>
          {alltask.map((cardData, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.taskcard}
                onPress={() => DetailabtTask(cardData)}>
                <View style={styles.tasktime}>
                  <Text style={styles.timetxt}>{cardData.date}</Text>
                  <TouchableOpacity onPress={() => Editpage(cardData)}>
                    <Image
                      style={styles.editicon}
                      source={require('../images/edit.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    style={styles.checkbox}
                    checked={isChecked}
                    onPress={handleCheck}
                    checkedColor="#DFBD43" // Change text color when checked
                  />
                </View>
                <View style={styles.tasktitle}>
                  <Text style={[styles.task, isChecked && styles.dashedText]}>
                    {cardData.title}
                  </Text>
                  <TouchableOpacity onPress={() => handleDelete(cardData?.id)}>
                    <Image
                      style={styles.deleteicon}
                      source={require('../images/delete.png')}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Text>Welcome to the Home Screen!{user}</Text>
      </View>

      <TouchableOpacity style={styles.stickyBtn} onPress={() => Submit()}>
        <Image style={styles.addicon} source={require('../images/add.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF4',
  },
  innercontainer: {
    // backgroundColor: '#FFFDF4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
  },
  mainTitle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '700',
  },
  subinnercontainer: {
    backgroundColor: '#FFFDF4',
    paddingHorizontal: 23,
  },
  searchbar: {
    width: '100%',
    borderRadius: 40,
    fontFamily: 'Lato-Bold',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 17,
    borderColor: '#B0ADAD',
    backgroundColor: '#ffffff',
  },
  taskview: {
    marginBottom: 17,
  },
  presentTask: {
    fontSize: 20,
    fontWeight: '700',
    color: '#444444',
  },
  task: {
    fontSize: 16,
    color: '#7C7D7A',
    fontWeight: '600',
  },
  dashedText: {
    textDecorationLine: 'line-through',
  },
  checkbox: {
    // alignSelf: 'center',
    // height: 24,
    // marginHorizontal: 2,
  },
  checkboxContainer: {
    // paddingVertical: -300,
    // marginHorizontal: 2,
    // borderWidth:2
  },
  tasktime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 48,
    paddingRight: 12,
    marginTop: 10,
  },
  taskcard: {
    borderWidth: 2,
    borderColor: '#D6D6D6',
    borderRadius: 15,
    marginTop: 10,
  },
  timetxt: {
    fontSize: 13,
    color: '#7C7D7A',
  },
  editicon: {
    height: 20,
    width: 20,
  },
  tasktitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 48,
    paddingRight: 15,
    marginBottom: 12,
  },
  deleteicon: {
    height: 20,
    width: 15,
  },
  addicon: {
    height: 30,
    width: 30,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  stickyBtn: {
    position: 'absolute',
    bottom: 15,
    left: '80%',
    marginTop: 20,
    width: Dimensions.get('window').width,
    backgroundColor: '#DFBD43',
    height: 60,
    width: 60,
    borderRadius: 100,
  },
});
