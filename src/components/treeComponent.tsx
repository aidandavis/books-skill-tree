import * as React from 'react';
// import * as Tree from 'react-d3-tree';

// const myTreeData = [
//     {
//         attributes: {
//             keyA: 'val A',
//             keyB: 'val B',
//             keyC: 'val C',
//         },
//         children: [
//             {
//                 attributes: {
//                     keyA: 'val A',
//                     keyB: 'val B',
//                     keyC: 'val C',
//                 },
//                 name: 'Level 2: A',
//             },
//             {
//                 name: 'Level 2: B',
//             },
//         ],
//         name: 'Top Level',
//     },
// ];

class TreeComponent extends React.Component {
    public render() {
        return (
            <div>
                <p>hello from tree section</p>
                <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
                    {/* <Tree data={myTreeData} /> */}
                </div>
            </div>
        );
    }
}

export default TreeComponent;