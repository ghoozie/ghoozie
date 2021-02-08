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
            <h2 onClick={() => showHide('skills-list-container')}>Highlighted Skills</h2>
        </div>

        <SkillsList />
        <LineBreak />

    </>);
}


