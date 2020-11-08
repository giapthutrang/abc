import React from 'react';
import { Container, Table } from 'react-bootstrap';
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);//props nhận bên ngoài state của nó
        this.state = {
            student: [
                {
                    id: 1,
                    name: "Trang",
                    age: 19,
                    gender: 'Nu',
                    classname: 'lop 1A'
                },
                {
                    id: 2,
                    name: "Trang",
                    age: 19,
                    gender: 'Nu',
                    classname: 'lop 1A'
                },
                {
                    id: 3,
                    name: "Trang",
                    age: 19,
                    gender: 'Nu',
                    classname: 'lop 1A'
                },
                {
                    id: 4,
                    name: "Trang",
                    age: 19,
                    gender: 'Nu',
                    classname: 'lop 1A'
                },
                {
                    id: 5,
                    name: "Trang",
                    age: 19,
                    gender: 'Nu',
                    classname: 'lop 1A'
                },
                {
                    id: 6,
                    name: "Trang",
                    age: 19,
                    gender: 'Nu',
                    classname: 'lop 1A'
                },
            ],
        };

    }

    componentDidMount() {

    }

    _renderStudent = (item, index) => {
        return (
            <tr>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.age}</th>
                <th>{item.gender}</th>
                <th>{item.classname}</th>
            </tr>
        )
    }
    render() {
        return (
            <Container>
                <h1>home</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>gender</th>
                            <th>classname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.student.map((item, index) => this._renderStudent(item, index))
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }
}


export default HomeScreen;
