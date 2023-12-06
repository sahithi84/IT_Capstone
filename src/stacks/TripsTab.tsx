/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import {View, useWindowDimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {TripsFlatList} from '../screens/protected/Trips/List';
import uuid from 'react-native-uuid';
import {CustomTabBar} from '../components/general/CustomTabBar';
import {memo} from 'react';

const RequestedTrips = memo(({navigation, route}: any) => {
  const drawerId = route.drawerId;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TripsFlatList
        tripKey={'request_list'}
        drawerId={drawerId}
        type={'simple'}
        navigation={navigation}
      />
    </View>
  );
});

const AcceptedTrips = memo(({navigation, route}: any) => {
  const drawerId = route.drawerId;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TripsFlatList
        tripKey={'accepted_request_list'}
        drawerId={drawerId}
        type={'simple'}
        navigation={navigation}
      />
    </View>
  );
});

const ArrivedTrips = memo(({navigation, route}: any) => {
  const drawerId = route.drawerId;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TripsFlatList
        drawerId={drawerId}
        tripKey={'arrived_request_list'}
        type={'simple'}
        navigation={navigation}
      />
    </View>
  );
});

const StartedTrips = memo(({navigation, route}: any) => {
  const drawerId = route.drawerId;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TripsFlatList
        drawerId={drawerId}
        tripKey={'started_request_list'}
        type={'simple'}
        navigation={navigation}
      />
    </View>
  );
});

function TripsTab({navigation, drawerId = 'RightDrawer'}: any) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Requested', drawerId},
    {key: 'second', title: 'Accepted', drawerId},
    {key: 'third', title: 'Arrived', drawerId},
    {key: 'fourth', title: 'Started', drawerId},
  ]);

  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'first':
        return <RequestedTrips navigation={navigation} route={route} />;
      case 'second':
        return <AcceptedTrips navigation={navigation} route={route} />;
      case 'third':
        return <ArrivedTrips navigation={navigation} route={route} />;
      case 'fourth':
        return <StartedTrips navigation={navigation} route={route} />;
      default:
        return null;
    }
  };

  const onTabPress = (tabIndex: any) => {
    setIndex(tabIndex);
  };
  return (
    <TabView
      key={`${uuid.v4()}`}
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={props => (
        <CustomTabBar
          {...props}
          tabs={routes?.map(route => route?.title)}
          activeTab={index}
          onTabPress={onTabPress}
        />
      )}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      pagerStyle={{backgroundColor: 'white', elevation: 10}}
    />
  );
}

export default memo(TripsTab);
