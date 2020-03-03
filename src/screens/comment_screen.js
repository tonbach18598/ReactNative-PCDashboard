import React, { Component } from 'react'
import { View, Text, Dimensions,TextInput, FlatList } from 'react-native'
import Values from '../ultilities/values'
import CustomHeader from '../components/custom_header'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../ultilities/colors'
import { Button, Icon } from 'react-native-elements'
import { loadComments, createComment, deleteComment, updateComment } from '../redux/actions/comment_action'
import { connect } from 'react-redux'
import { WARNING, INITIALIZATION, CREATE_COMMENT_FAILURE, CREATE_COMMENT_SUCCESS, UPDATE_COMMENT_FAILURE, UPDATE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, DELETE_COMMENT_SUCCESS } from '../redux/actions/type'
import Toast from 'react-native-simple-toast'
import Swipeout from 'react-native-swipeout'
import FastImage from 'react-native-fast-image'
import Dialog from 'react-native-dialog'
import { loadSelf } from '../redux/actions/self_action'

class CommentScreen extends Component {
    
    showDialog=(item)=>{
        this.setState({
            selectedComment:item,
            dialogVisible:true,
            dialogContent:item.content
        })
    }

    constructor(props){
        super(props)
        this.state={
            content:'',
            selectedComment:{
                id:'',
                content:''
            },
            dialogContent:'',
            dialogVisible:false
        }
    }

    componentDidMount() {
        this.props.fetchData(this.props.navigation.state.params.postId)
        this.props.initSelf()
    }

    componentWillUpdate(){
        if(this.props.response===CREATE_COMMENT_SUCCESS)
            this.setState({content:''})
        else if(this.props.response===UPDATE_COMMENT_SUCCESS)
            this.setState({dialogVisible:false, dialogContent:''})
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title={Values.COMMENT.toUpperCase()} left={'arrow-back'} onPressLeft={() => { this.props.navigation.goBack() }} />
                <FlatList
                ref='flatList'
                style={{flex:1}}
                keyExtractor={item=>item.id}
                ListFooterComponent={<View style={{height:5}}/>}
                data={this.props.comments}
                    renderItem={({ item }) => (
                        <Swipeout
                            autoClose={true}
                            backgroundColor='transparent'
                            right={[
                                {
                                    component:<View style={{justifyContent:'center',alignItems:'center', height:'100%'}}>
                                        <Icon name='edit'/>
                                        <Text>{Values.EDIT}</Text>
                                    </View>,
                                    backgroundColor:Colors.orangeAccent,
                                    onPress:()=>{
                                        if(item.userId===this.props.self.userId)
                                            this.showDialog(item)
                                        else Toast.showWithGravity('Sửa bình luận thất bại', Toast.SHORT, Toast.CENTER)
                                    }
                                },
                                {
                                    component:<View style={{justifyContent:'center',alignItems:'center', height:'100%'}}>
                                        <Icon name='delete' color={Colors.white}/>
                                        <Text style={{color:Colors.white}}>{Values.DELETE}</Text>
                                    </View>,
                                    backgroundColor:Colors.deepOrangeAccent,
                                    onPress:()=>{this.props.onDelete(this.props.navigation.state.params.postId,item.id)}
                                },
                            ]}>
                            <View style={{flexDirection:'row', marginTop:5, marginBottom:4, marginLeft:10, marginRight:10}}>
                                <View style={{marginTop:10, marginRight:10}}>
                                    <FastImage
                                        style={{ width: 40, height: 40, borderRadius: 20 }}
                                        source={{ uri: item.userAvatar }} />
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <View style={{backgroundColor:Colors.grey300, maxWidth:Dimensions.get('window').width*0.7, borderRadius:15, paddingTop:10, paddingBottom:10, paddingLeft:15, paddingRight:15}}>
                                        <Text style={{fontSize:16, fontWeight:'bold', color:Colors.blue}}>{item.userName}</Text>
                                        <Text style={{fontSize:14}}>{item.content}</Text>
                                    </View>
                                    <Text style={{fontSize:12, color:Colors.grey, marginTop:5, marginLeft:15}}>{item.time}</Text>
                                </View>
                            </View>
                        </Swipeout>
                    )}/>
                    <LinearGradient
                        style={{ width: Dimensions.get('window').width }}
                        start={{ x: 1.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={['#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <View style={{ flex: 5, borderRadius: 20, backgroundColor: Colors.white, marginLeft: 20,marginRight:10, marginTop: 10, marginBottom: 10, paddingLeft: 20, paddingRight:20 }}>
                                <TextInput
                                    multiline
                                    style={{ fontSize: 16, justifyContent: 'center', maxHeight:80, ...Platform.select({ ios: { marginTop: 15, marginBottom: 15 } }) }}
                                    placeholder={Values.ENTER_CONTENT}
                                    selectionColor={Colors.orange}
                                    value={this.state.content}
                                    onChangeText={content=>this.setState({content})}/>
                            </View>
                            <View style={{flex:1, flexWrap:'wrap'}}>
                                <Button icon={<Icon name='send' color={Colors.white} size={30} />} type="clear" onPress={() => {this.props.onSend(this.props.navigation.state.params.postId, this.state.content)}} />
                            </View>
                        </View>
                    </LinearGradient>
                    <Dialog.Container visible={this.state.dialogVisible}>
                        <Dialog.Title style={{color:Colors.deepOrangeAccent}}>{Values.EDIT_COMMENT.toUpperCase()}</Dialog.Title>
                        <Dialog.Input value={this.state.dialogContent} onChangeText={dialogContent=>{this.setState({dialogContent})}}>
                        </Dialog.Input>
                        <Dialog.Button label={Values.CONFIRM} color={Colors.lightBlue} 
                            onPress={()=>{
                                if(this.state.dialogContent!=='')
                                    this.props.onEdit(this.props.navigation.state.params.postId, this.state.selectedComment.id, this.state.dialogContent)
                                else Toast.showWithGravity('Nội dung bình luận không được để trống', Toast.SHORT, Toast.CENTER)
                                }}  />
                        <Dialog.Button label={Values.CANCEL} onPress={()=>{this.setState({dialogVisible:false, dialogContent:''})}} color={Colors.blue} />
                    </Dialog.Container>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    switch (state.commentStatus) {
        case INITIALIZATION:
            break
        case WARNING:
            Toast.showWithGravity('Nội dung bình luận không được để trống', Toast.SHORT, Toast.CENTER)
            break
        case CREATE_COMMENT_FAILURE:
            Toast.showWithGravity('Gửi bình luận thất bại', Toast.SHORT, Toast.CENTER)
            break
        case CREATE_COMMENT_SUCCESS:
            break
        case UPDATE_COMMENT_FAILURE:
            Toast.showWithGravity('Sửa bình luận thất bại', Toast.SHORT, Toast.CENTER)
            break
        case UPDATE_COMMENT_SUCCESS:
            Toast.showWithGravity('Sửa bình luận thành công', Toast.SHORT, Toast.CENTER)
            break
        case DELETE_COMMENT_FAILURE:
            Toast.showWithGravity('Xoá bình luận thất bại', Toast.SHORT, Toast.CENTER)
            break
        case DELETE_COMMENT_SUCCESS:
            Toast.showWithGravity('Xoá bình luận thành công', Toast.SHORT, Toast.CENTER)
            break
    }
    return {
        comments:state.comments,
        response:state.commentStatus,
        self: state.self
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSend:(postId,content)=>{
            dispatch(createComment(postId,content))
        },
        onEdit:(postId, commentId, content)=>{
            dispatch(updateComment(postId, commentId, content))
        },
        onDelete:(postId, commentId)=>{
            dispatch(deleteComment(postId, commentId))
        },
        initSelf: () => {
            dispatch(loadSelf())
        },
        fetchData: (postId) => {
            dispatch(loadComments(postId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentScreen)