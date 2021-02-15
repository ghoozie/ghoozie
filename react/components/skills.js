function SkillsList() {
    return(<>
        <div id="skills-list-container" style={{display:'none'}}>
            here are my skills
        </div>
    </>);
}


function Skills() {
    return(<>
        <div id="skills-header-container">
            <h2 onClick={() => $('#skills-list-container').toggle()}>Highlighted Skills</h2>
        </div>

        <SkillsList />
        <LineBreak />

    </>);
}


