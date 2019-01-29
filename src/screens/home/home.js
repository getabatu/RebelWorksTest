import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions, ScrollView, FlatList } from "react-native";
import { Toast, Icon, Card, Spinner } from "native-base";

import HeaderMenu from "../../components/headerMenu";
import GlobalStyle from "../../style/globalStyle";
import GlobalFunction from "../../utils/globalFunction"

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const listPages = 1

class Home extends Component {

    static navigationOptions = {
        title: '',
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            expanded: 'empty',
            page: listPages,
            moreVissible: true,
            showProgress: true,
            isRefresh: false,
        }
    }

    componentWillMount() {
        this.getMovies()
    }

    getMovies() {
        fetch(`${GlobalFunction.endpointAddress}/now_playing?api_key=${GlobalFunction.APIKey}&language=en-US&page=${this.state.page}`)
            .then(response => response.json())
            .then(async responseJson => {
                let listData = this.state.listData
                await responseJson.results.forEach(element => {
                    listData.push(element)
                });

                if (listData.length === responseJson.total_results) {
                    this.setState({ isRefresh: false, showProgress: false, moreVissible: false, moreProgress: false, listData });
                } else {
                    this.setState({ isRefresh: false, showProgress: false, moreVissible: true, moreProgress: false, listData });
                }
            })
            .catch(error => {
                Toast.show({
                    text: "Error Occur ! Please Try Again Later",
                    position: "bottom",
                    type: "danger",
                    duration: 3000,
                    buttonText: "Okay"
                });
            });
    }

    refreshControl = () => {
        setTimeout(() => {
            this.setState({ isRefresh: true, page: listPages, showProgress: true })
        }, 0);
        setTimeout(() => {
            this.getMovies();
        }, 10);
    }

    handleMore = () => {
        this.setState({
            moreProgress: true,
            page: this.state.page + listPages
        }, () => {
            this.getMovies();
        })
    }

    renderFooter = () => {
        if (!this.state.moreProgress && this.state.listData.length % listPages === 0 && this.state.moreVissible == true) {
            return (
                <Spinner size="small" color={GlobalStyle.blue} />
            )
        } else {
            return (<View />)
        }
    }

    renderList(obj, index) {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("MovieDetail", { ...obj })} >
                <Card style={{ borderRadius: 10, width: width - 15, alignSelf: 'center', marginTop: 5, flexDirection: 'row' }}>
                    <Image style={{ resizeMode: 'cover', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, height: height / 4, width: '40%' }} source={{ uri: `https://image.tmdb.org/t/p/w500${obj.poster_path}` }} />
                    <View style={{ padding: 10, width: '59%' }} >
                        <Text style={{ fontSize: 19 }} >{obj.title}</Text>
                        <Text numberOfLines={9} style={{ marginTop: 10 }} >{obj.overview}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={GlobalStyle.fill}>
                <HeaderMenu />
                <FlatList
                    data={this.state.listData}
                    extraData={this.state}
                    renderItem={({ item, index }) => this.renderList(item, index)}
                    onRefresh={this.refreshControl}
                    refreshing={this.state.isRefresh}
                    keyExtractor={(item, i) => `${i}`}
                    onEndReached={this.handleMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={this.renderFooter}
                />
            </View>
        );
    }
}

export default Home;
