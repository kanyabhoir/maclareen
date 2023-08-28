import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const TaskDetailsScreen = ({navigation, route}) => {
  const Data = route.params;
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
            <Text style={styles.mainTitle}>Task Details</Text>
          </View>
          <View></View>
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <View>
          <View style={styles.titleview}>
            <Text style={styles.titletxt}>{Data.title}</Text>
          </View>
          <View style={styles.statusmainview}>
            <View>
              <Text style={styles.statustxt}>Status</Text>
            </View>
            <View>
              <Text style={styles.statusdata}>{Data.Status}</Text>
            </View>
          </View>
          <View style={styles.datemainview}>
            <View>
              <Text style={styles.datetxt}>Due date</Text>
            </View>
            <View>
              <Text style={styles.datedata}>{Data.date}</Text>
            </View>
          </View>
          <View style={styles.labelmainvaiew}>
            <View>
              <Text style={styles.labeltxt}>Label</Text>
            </View>
            <View>
              <Text style={styles.labeldata}>{Data.label}</Text>
            </View>
          </View>
          <View style={styles.discriptionView}>
            <View>
              <Text style={styles.descriptiontxt}>Description</Text>
            </View>
            <View>
              <Text
                style={styles.descriptiondata}>
                {Data.description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskDetailsScreen;

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
  backicon: {
    height: 20,
    width: 20,
  },
  scroll: {marginTop: 33, paddingHorizontal: 17},
  titleview: {marginBottom: 30},
  titletxt: {
    fontSize: 35,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
  statusmainview: {
    marginBottom: 10,
    flexDirection: 'row',
    gap: 100,
  },
  statustxt: {
    fontSize: 16,
    color: '#7C7D7A',
    fontWeight: '600',
  },
  statusdata: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'left',
  },
  datemainview: {
    marginBottom: 10,
    flexDirection: 'row',
    gap: 85,
  },
  datetxt: {
    fontSize: 16,
    color: '#7C7D7A',
    fontWeight: '600',
  },
  datedata: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'left',
  },
  labelmainvaiew: {
    marginBottom: 10,
    flexDirection: 'row',
    gap: 110,
  },
  labeltxt: {
    fontSize: 16,
    color: '#7C7D7A',
    fontWeight: '600',
  },
  labeldata: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'left',
  },
  discriptionView: {
    marginBottom: 10,
  },
  descriptiontxt: {
    fontSize: 23,
    color: '#000000',
    fontWeight: '600',
  },
  descriptiondata:{
    fontSize: 16,
    color: '#7C7D7A',
    fontWeight: '500',
    textAlign: 'left',
  }
});
