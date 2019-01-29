import React, { Component } from "react";
import { Alert, Text, View, LayoutAnimation, UIManager, Platform, TouchableOpacity, Dimensions, Image, FlatList, ImageBackground } from "react-native";
import { Content, Spinner, Icon } from "native-base";

import HeaderGoBack from "../../components/headerGoBack";
import GlobalFunction from "../../utils/globalFunction";
import GlobalStyle from "../../style/globalStyle";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

class Feature extends Component {

    static navigationOptions = {
        title: '',
        header: null
    };

    constructor(props) {
        super(props);
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        this.state = {
            listFamiliar: []
        };
    }

    componentWillMount() {
        this.getFamiliar()
    }

    getFamiliar() {
        const { id } = this.props.navigation.state.params
        fetch(`${GlobalFunction.endpointAddress}/${id}/similar?api_key=${GlobalFunction.APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ listFamiliar: responseJson.results });
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

    renderFamiliar(obj, index) {
        return (
            <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate("MovieDetail", { ...obj })}>
                <Image style={{ height: width * 0.4, width: width * 0.25, marginRight: 20, resizeMode: 'cover', borderRadius: 10 }} source={{ uri: `https://image.tmdb.org/t/p/w500${obj.poster_path}` }} />
            </TouchableOpacity>
        )
    }

    render() {
        const { title, poster_path, overview, release_date } = this.props.navigation.state.params
        return (
            <View style={GlobalStyle.fill}>
                <HeaderGoBack onBack={() => this.props.navigation.goBack()} pagetitle={title} />
                <Content style={{ height, width }} >
                    <Image style={{ height: height / 2, width }} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} />
                    <Text style={{ fontSize: 17, marginVertical: 10, margin: 10, alignSelf: 'flex-end' }} >{release_date}</Text>
                    <Text style={{ fontSize: 25, margin: 10 }} >{title}</Text>
                    <Text style={{ margin: 10 }} >{overview}</Text>
                    <Text style={{ marginTop: 20, alignSelf: 'center', fontSize: 17 }} >Familiar Movies</Text>
                    {
                        this.state.listFamiliar.length == 0 ?
                            <Spinner color={GlobalStyle.blue} size='large' />
                            :
                            <FlatList
                                data={this.state.listFamiliar}
                                style={{ marginLeft: 20, marginTop: 5, marginBottom: 20 }}
                                keyExtractor={(i, x) => `${x}`}
                                renderItem={({ item, index }) => this.renderFamiliar(item, index)}
                                horizontal={true}
                            />
                    }
                </Content>
            </View>
        );
    }
}

export default (Feature);
