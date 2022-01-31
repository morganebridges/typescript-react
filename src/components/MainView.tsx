import * as React from "react";
import {
    Alert,
    Container, Row

} from "react-bootstrap";
// @ts-ignore
import {Title} from "../model/Title.ts";

const MainView = props => {
    let list: Array<Title> = [
        new Title("title1", 1),
        new Title("title2", 2),
        new Title("title3", 3)

    ]

    return (
        <Container className={"app-container"}>
                <Row>
                <h1>
                    {
                        list.map(title => {
                            return (
                                <Row>
                                    <Alert key={"primary"}>
                                        <div className={"main-row-container"}>
                                            Item {title.title} is fancy, and has {title.index} items
                                        </div>
                                    </Alert>
                                </Row>
                            )
                        })
                    }
                </h1>
            </Row>
        </Container>
    )
};
export default MainView;