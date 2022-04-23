import React from "react";


function Credentials(props) {

    function handleInputChangeschema2(event) {
        props.handleInputChangeschema(event.target.value);
    }

    const credlist = props.myschemas.map(schema => {
        //const atr=  schema.attrNames.forEach(()=> {return <ul>{schema.attrNames}</ul>} )
        return <tr key={schema.id}>
            <td> {schema.ver}</td>
            <td> {schema.id}</td>
            <td> {schema.name}</td>
            <td> {schema.version}</td>
            <td> {schema.attrNames} </td>

        </tr>

    });



    return (

        <>
            <table >
                <thead >
                    <tr >
                        <th> Ver</th>
                        <th> ID</th>
                        <th> name</th>
                        <th> version</th>
                        <th> attributes</th>
                    </tr>

                </thead>
                <tbody style={{ "maxHeight": "1", "overflowY": "scroll" }}>
                    {credlist}
                </tbody>

            </table>


            <form onSubmit={props.getschema}>
                    <input placeholder="introduce SchemaID" style={{ width: 330, height: 30 }} type="text" onChange={handleInputChangeschema2} />
                    <button type="submit">Search by SchemaID</button>
                </form>

                <table >
                <thead >
                    <tr >
                        <th> Ver</th>
                        <th> ID</th>
                        <th> name</th>
                        <th> version</th>
                        <th> attributes</th>
                    </tr>

                </thead>
                <tbody style={{ "maxHeight": "1", "overflowY": "scroll" }}>
                <tr key={props.schema.id}>
            <td> {props.schema.ver}</td>
            <td> {props.schema.id}</td>
            <td> {props.schema.name}</td>
            <td> {props.schema.version}</td>
            <td> {props.schema.attrNames} </td>

        </tr>
                </tbody>

            </table>



        </>
    )
}

export default Credentials;