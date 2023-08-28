import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AllTaskData, SetData} from '../redux/action/Action';
import {useForm, Controller} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditScreen = ({navigation, route}) => {
  const editData = route?.params;
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: {isSubmitSuccessful, errors},
  } = useForm({});
  const dispatch = useDispatch();
  const user = useSelector(state => state.Reducers.firststate);
  const alltask = useSelector(state => state.Reducers.alltaskstate);

  const onSubmit = async data => {
    console.log('data----------->', data);

    dispatch(SetData(['4', '5', '6']));
  };

  useEffect(() => {
    reset(editData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar
          animated={true}
          backgroundColor="#FFFDF4"
          barStyle="dark-content"
        />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.backicon}
              source={require('../images/backIcon.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.mainTitle}>Edit Task</Text>
          </View>
          <View></View>
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <View>
          <Text style={styles.lables}>Task Title/Name</Text>
          <View style={styles.titleview}>
            <Controller
              control={control}
              rules={{required: true}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Title"
                />
              )}
              name="title"
            />
          </View>
          {errors.title && <Text style={styles.error}>Title is required</Text>}
          <Text style={styles.lables}>Status</Text>
          <View style={styles.statusview}>
            <Controller
              control={control}
              rules={{required: true}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Status"
                />
              )}
              name="Status"
            />
          </View>
          {errors.Status && (
            <Text style={styles.error}>Status is required</Text>
          )}

          <Text style={styles.lables}>Task Date and Time</Text>
          <View style={styles.dateview}>
            <Controller
              control={control}
              rules={{required: true}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="date"
                />
              )}
              name="date"
            />
          </View>
          {errors.date && (
            <Text style={styles.error}>date and time is required</Text>
          )}
          <Text style={styles.lables}>Task label</Text>

          <View style={styles.labelview}>
            <Controller
              control={control}
              rules={{required: true}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="label"
                />
              )}
              name="label"
            />
          </View>
          {errors.label && <Text style={styles.error}>label is required</Text>}
          <Text style={styles.lables}>Task description</Text>

          <View style={styles.descriptionview}>
            <Controller
              control={control}
              rules={{required: true}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="description"
                />
              )}
              name="description"
            />
          </View>
          {errors.description && (
            <Text style={styles.error}>description is required</Text>
          )}
          <View></View>
        </View>
      </ScrollView>
      <Text>kya bolti public {user}</Text>
      <View style={{paddingHorizontal: 20}}>
        <TouchableOpacity
          style={styles.stickyBtn}
          onPress={handleSubmit(onSubmit)}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              marginTop: 10,
              color: '#000',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF4',
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
  lables: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    marginBottom: 5,
  },
  error: {
    color: 'red',
    marginTop: -10,
    marginBottom: 10,
  },
  stickyBtn: {
    position: 'relative',
    bottom: 15,
    width: Dimensions.get('window').width / 1.1,
    backgroundColor: '#DFBD43',
    height: 46,
    borderRadius: 10,
    alignItems: 'center',
  },
  backicon: {
    height: 20,
    width: 20,
  },
  scroll: {
    marginTop: 33,
    paddingHorizontal: 17,
  },
  titleview: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#B0ADAD',
  },
  statusview: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#B0ADAD',
  },
  dateview: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#B0ADAD',
  },
  labelview: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#B0ADAD',
  },
  descriptionview: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#B0ADAD',
  },
});
