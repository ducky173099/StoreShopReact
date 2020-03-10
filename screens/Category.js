
import React from 'react';
import {StyleSheet,View,Text,FlatList, Alert,TouchableOpacity} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import ProductListItem from '../components/ProductListItem';

export default class Category extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products:[
        {
          id: 1,
          images: [
            {
              url: 'https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png'
            }
          ],
          name: 'ky dep trai',
          price: '50000000'
        },
        {
          id: 2,
          images: [
            {
              url: 'https://res.cloudinary.com/djeghcumw/image/upload/v1547297558/tuts/snowboard.png'
            }
          ],
          name: 'ky dep trai',
          price: '50000000'
        }
      ],
      showAlert: false 
    }
  }
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
 

  static navigationOptions = ({ navigation }) => {
      const { state } = navigation;
      const {route} = this.props;
      // const {navigation} = this.props;

      const {categoryName} = route.params;
      return{
        title: state.params.categoryName,
      }
  }
    render(){
        // const {route} = this.props;
        // const {categoryName} = route.params;
        // return(
        //     <View>    
        //        <Text>kyyyyyyyyy: {categoryName}</Text>
        //     </View>
        // );
        const {showAlert} = this.state;
        return (
          <View>
              <FlatList     
                data={this.state.products}
                contentContainerStyle={styles.container}
                numColumns={2}
                renderItem={({item}) => 
                  <View style={styles.wrapper}>
                    <TouchableOpacity onPress={() => {this.showAlert();}}>
                      <ProductListItem products={item}/>
                    </TouchableOpacity>
                  </View>}
                keyExtractor={(item) => item.id +""}
              />
              <AwesomeAlert
                    style={{flex:1, backgroundColor:'red'}}
                    show={showAlert}
                    showProgress={false}
                    title="AwesomeAlert"
                    message="I have a message for you!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText="Yes, delete it"
                    confirmButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
          </View>

        )
    }
};

const styles = StyleSheet.create({
  container:{
      paddingHorizontal:8,
      paddingTop: 16
  },
  wrapper:{
    flex: 1,
    paddingHorizontal: 8,
  }
})

