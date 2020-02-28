import React, { Component } from 'react'
import { View, Text, Dimensions,TextInput, FlatList } from 'react-native'
import Values from '../ultilities/values'
import CustomHeader from '../components/custom_header'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../ultilities/colors'
import { Button, Icon, Avatar } from 'react-native-elements'
import { loadComments } from '../redux/actions/comment_action'
import { connect } from 'react-redux'

class CommentScreen extends Component {
    
    componentDidMount() {
        this.props.fetchData(this.props.navigation.state.params.postId)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title={Values.COMMENT.toUpperCase()} left={'arrow-back'} onPressLeft={() => { this.props.navigation.goBack() }} />
                <FlatList 
                style={{flex:1}}
                keyExtractor={item=>item.id}
                ListFooterComponent={<View style={{height:5}}/>}
                data={this.props.comments}
                    renderItem={({ item }) => (
                        <View style={{flexDirection:'row', marginTop:5, marginBottom:4, marginLeft:10, marginRight:10}}>
                            <View style={{marginTop:10, marginRight:10}}>
                                <Avatar
                                rounded
                                size='small'
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
                                    selectionColor={Colors.orange}>
                                </TextInput>
                            </View>
                            <View style={{flex:1, flexWrap:'wrap'}}>
                                <Button icon={<Icon name='send' color={Colors.white} size={30} />} type="clear" onPress={() => { }} />
                            </View>
                        </View>
                    </LinearGradient>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments:state.comments,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (postId) => {
            dispatch(loadComments(postId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentScreen)