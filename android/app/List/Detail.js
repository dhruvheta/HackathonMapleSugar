import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Alert,
  ToolbarAndroid,
  Button
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};
export default class Detail extends Component {
  static navigationOptions = {
    title: 'Categories',
    headerRight: <Button title="Info"  onPress={onButtonPress}/>
  };
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.pollId = props.navigation.state.params

    this.state = {
      dataSource: ds.cloneWithRows(['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6','cat7','cat8']),
    };
    this.styles = StyleSheet.create({
        row: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        list: {
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        item: {
            backgroundColor: 'white',
            margin: 2,
            padding: 45,
            fontSize:20,
            color: '#000000',
            width: 175,
            justifyContent: 'center',
        },
      });
}

  componentDidMount() {
    const {params} = this.props.navigation.state
    console.log(params)
    this.getPollsList()
  }

  getPollsList() {
    data = { token: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYwNDFmZDg5YzRhYmU4YzBiMzgxMWVlOWFmYTk3YjEyZDBkNjg3ZjcifQ.eyJhenAiOiI3MzA1NzAzMTUxMjgtb25zbGJmdDB1ZWsxam5ndHM5ZnRhOGk2YWkyc2Q1aDkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3MzA1NzAzMTUxMjgtOGVxcmI2cGI4cGhrYm5kN3FsaW1naGFiNGgxOTlvcmkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDAzOTAxMjg3ODMzOTI2MDI1MTgiLCJoZCI6InVwdGFrZS5jb20iLCJlbWFpbCI6Imt5bGUuZm93bGVyQHVwdGFrZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwiaWF0IjoxNDkzOTI3MzM5LCJleHAiOjE0OTM5MzA5MzksIm5hbWUiOiJLeWxlIEZvd2xlciIsInBpY3R1cmUiOiJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLWQ4VWpRZEFEdGtRL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FIYWxHaHJqWUVHekFrLTRMQVBFUFpiOE9nbS1FTDNyZ1Evczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6Ikt5bGUiLCJmYW1pbHlfbmFtZSI6IkZvd2xlciIsImxvY2FsZSI6ImVuIn0.Mqw4HmkumrX4p1sUShpift1QuGLtzAukHtffNsK61e9DrweTQF2searBlsb6TWQ9NK9d9wQXx3kcPHhXAqEIgJ3BzfHQIJJVnae0zG5EHJ2-v52Iw3qRtA65E5hQLtBsXZeZjUCgWr4wzkATkyb5ybUN7a3pYKyRwXZ-Zo__6qkLlrS7oz3kiJtaoZyG9IERJew-Nml7iYnXUCB8jECCoxHzpVLWtbP6ROJtuB7YhDJRWYH2I5gUqt5sSPvPSvEr220LgHaZw0kWdL0Cgb_LHFfxnwDYWX5h_bp72CTg7nptaiKY7TIay-J0niz_7XKwM7mleHka1ZLCwFURPxlcuQ"}
    url = `https://sleepy-sierra-94063.herokuapp.com/poll/${this.pollId}?token=${data.token}`
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.handlePollsList(responseJson.poll.categories);
      })
      .catch((error) => {
        console.error(error);
      });
   }

   handlePollsList(items) {
     this.setState({
       dataSource: this.state.dataSource.cloneWithRows(items),
       loaded: true
     });
   }

  render() {
    return (
      <View>
        <ListView contentContainerStyle={this.styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            console.log(rowData)
            return (
              <TouchableHighlight  onPress={() => {
                        this._onPress(rowData);
                      }}>
                <View style={this.styles.row} >
                  <Text style={this.styles.item}>{rowData.name}</Text>
                </View>
              </TouchableHighlight>
            );
          }}
        />
      </View>
    );
  }

  _onPress(rowData) {
    this.props.navigation.navigate('ItemList', rowData)
  }

}

AppRegistry.registerComponent('Detail', () => USnack);
