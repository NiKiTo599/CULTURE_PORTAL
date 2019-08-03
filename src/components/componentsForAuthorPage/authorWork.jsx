import React from 'react';
import { Table, Container } from 'react-bootstrap';
import WorksStyle from './authorStyles/works.module.css';

const renderTable = (work) => {
    return (
        <Table striped borderless hover className={WorksStyle.table}>
            <thead>
                <tr>
                    <th>{work.subject}</th>
                </tr>
            </thead>
            <tbody>
                {work.names.map((names) => (
                    <tr>
                        <td>{names}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

const renderWork = (authorInfo) => {
    console.log(authorInfo)
    return (authorInfo.works.length > 1) ?
        (authorInfo.works.map((work) => (
            <div>
                { renderTable(work) }
            </div>
        )
        )) : (
            <div>
                { renderTable(work) }
            </div>
        )
}

const AuthorWork = (authorInfo) => {
    console.log(authorInfo.works.length);
    const workTable = renderWork(authorInfo);
    return (
        <div className={WorksStyle.container}>
            <Container>
                { workTable }
            </Container>
        </div>
    )
}

export default AuthorWork