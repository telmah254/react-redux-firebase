const initState = {
    projects: [
        {id: '1', title: 'help me find something', content: 'example'},
        {id: '2', title: 'example', content: 'example'},
        {id: '3', title: 'example222', content: 'example333'},
    ]
}
 
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state; 
    }
    return state
}

export default projectReducer