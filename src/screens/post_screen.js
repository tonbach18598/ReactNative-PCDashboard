import React, { Component } from 'react'
import { View, Text, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Values from '../ultilities/values'
import CustomHeader from '../components/custom_header'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../ultilities/colors'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { loadSelf } from '../redux/actions/self_action'
import Optional from 'react-native-optional'
import { createPost } from '../redux/actions/class_action'
import { INITIALIZATION, WARNING, CREATE_CLASS_FAILURE, CREATE_CLASS_SUCCESS } from '../redux/actions/type'
import Toast from 'react-native-simple-toast'
import FastImage from 'react-native-fast-image'
import ImagePicker from 'react-native-image-picker'

class PostScreen extends Component {

    getImage=()=>{
        ImagePicker.launchImageLibrary({
            title: 'Chọn hình ảnh',
            storageOptions: {
              skipBackup: true,
              path: 'images'
            },
          }, (response) => {
          
            if (response.didCancel) {
              console.log('User cancelled image picker')
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error)
            } else {
              const source = { uri: response.uri }
              this.setState({
                imageSource: source
              })
            }
          })
    }

    constructor(props){
        super(props)
        this.state={
            content:'',
            imageSource:null
        }
    }

    componentDidMount(){
        this.props.initSelf()
    }

    componentWillUpdate(){
        if(this.props.response===CREATE_CLASS_SUCCESS)
            this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader
                    title={Values.POST_POST.toUpperCase()}
                    left={'arrow-back'}
                    onPressLeft={() => { this.props.navigation.goBack() }}
                    right={'file-upload'}
                    onPressRight={() => {this.props.onSend(this.props.navigation.state.params.classId, this.state.content, this.state.imageSource)}} />
                    
                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'column', marginTop: 10, marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                            <Optional test={this.props.self.avatar !== null}>
                                <FastImage
                                    style={{ width: 50, height: 50, borderRadius: 25 }}
                                    source={{ uri: this.props.self.avatar }} />
                            </Optional>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Optional test={this.props.self.name !== null}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.blue }}>{this.props.self.name}</Text>
                                </Optional>
                                <Text style={{ fontSize: 12, color: Colors.grey, marginTop: 5 }}>Giảng viên</Text>
                            </View>
                        </View>
                        <TextInput
                            multiline
                            style={{ fontSize: 20, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, ...Platform.select({ ios: { marginTop: 15, marginBottom: 15 } }) }}
                            selectionColor={Colors.orange}
                            placeholder={Values.YOUR_THINKING}
                            value={this.state.content}
                            onChangeText={content=>this.setState({content})}/>
                        <FastImage source={this.state.imageSource} style={{width:Dimensions.get('window').width, height:300}}/>
                    </View>
                </ScrollView>

                <TouchableOpacity onPress={()=>{this.getImage()}}>
                    <LinearGradient
                        style={{ width: Dimensions.get('window').width }}
                        start={{ x: 1.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={['#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <View style={{ flex: 5, marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
                                <Text style={{ fontSize: 16, color: Colors.white }}>{Values.ADD_IMAGE}</Text>
                            </View>
                            <View style={{ flex: 1, flexWrap: 'wrap' }}>
                                <Icon name='image' color={Colors.white} size={30} />
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    switch (state.classStatus) {
        case INITIALIZATION:
            break
        case WARNING:
            Toast.showWithGravity('Nội dung bài đăng không được để trống', Toast.SHORT, Toast.CENTER)
            break
        case CREATE_CLASS_FAILURE:
            Toast.showWithGravity('Đăng bài thất bại', Toast.SHORT, Toast.CENTER)
            break
        case CREATE_CLASS_SUCCESS:
            Toast.showWithGravity('Đăng bài thành công', Toast.SHORT, Toast.CENTER)
            break
    }
    return {
      self: state.self,
      response:state.classStatus
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        onSend:(classId, content, image)=>{
            dispatch(createPost(classId, content, image))
        },
        initSelf: () => {
            dispatch(loadSelf())
        }
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(PostScreen)