function ProjectsList() {
    return(<>
        <div id="projects-list-container" style={{display:'none'}}>
            here are my projects
        </div>
    
    </>);
}


function Projects() {
    return(<>
        <div id="projects-header-container">
            <h2 onClick={() => $('#projects-list-container').toggle()}>Projects</h2>
        </div>

        <ProjectsList />
        <LineBreak />

    </>);
}