function mprint(label,log) {
    console.log(label + ":");
    console.log(log);
}

var skills = [
    {logo: '<img src="../assets/img/python-logo.png" height="30px" />',
     name: 'Python',
     uses: 'General computation, quadratic programming, server-side computation',
     likes: 'Good libraries, simple, scalable, documentation',
     dislikes: "-"},

    {logo: '<img src="../assets/img/javascript.png" height="30px" />',
     name: 'JavaScript',
     uses: 'Dynamic websites, post requests, graphs, used in every project, makes things come alive',
     likes: 'Libraries, syntax, functionality, documentation',
     dislikes: '-'},

    {logo: '<img src="../assets/img/react.png" height="30px" />',
     name: 'React',
     uses: 'Just tinkering',
     likes: 'Components, selective rendering on change',
     dislikes: 'Takes over whole project structure, no imports when used via CDN'},

    {logo: '<img src="../assets/img/php-logo.jpg" height="30px" />',
     name: 'PHP',
     uses: '<a href="https://uncommoncore.io" target="_blank">Uncommon Core</a>',
     likes: 'Superglobal variables such as $_SESSION',
     dislikes: 'Lends itself to spaghetti code if not careful, can turn projects clunky'},    

    {logo: '<img src="../assets/img/flask.png" height="30px" />',
     name: 'Flask',
     uses: 'All <a href="https://greenstargroup.org" target="_blank">Greenstar</a> projects back end',
     likes: 'Routing, synergy with front and back ends, works well with Docker Compose',
     dislikes: '-'},

    {logo: '<img src="../assets/img/mysql-logo.png" height="30px" />',
     name: 'MySQL',
     uses: 'Database querying across all projects',
     likes: 'Simple uses but also with powerful options such as Joins',
     dislikes: 'Syntax can be finnicky when writing <a href="code.html#sql-library">automated libraries</a>'},

    {logo: '<img src="../assets/img/docker-logo.png" height="30px" />',
     name: 'Docker',
     uses: 'Resolving cross-machine dependencies',
     likes: 'Easy collaboration, consistent environments across people/machines',
     dislikes: "Hot refresh sometimes misses, occasionally will have to rebuild container"},

    {logo: '<img src="../assets/img/kubernetes-logo.png" height="30px" />',
     name: 'Kubernetes',
     uses: '<a href="https://uncommoncore.io" target="_blank">Uncommon Core</a>',
     likes: 'Great user benefits with Docker (scaling, error handling)',
     dislikes: "Haven't used it enough yet to get full scope of power"},

    {logo: '<img src="../assets/img/docker-compose.jpg" height="30px" />',
     name: 'Composer',
     uses: 'Isolated environments working together',
     likes: "Coalescence of competing frameworks (e.g. Flask/React), easy to read console output, clear project structure",
     dislikes: "-"},


    
]


var innerTable = '';

for (var i in skills) {
    innerTable += '<tr><td style="vertical-align:middle;">'+skills[i]['logo']+'</td><td style="vertical-align:middle;">'+skills[i]['name']+'</td><td style="vertical-align:middle;">'+skills[i]['uses']+'</td><td style="vertical-align:middle;">'+skills[i]['likes']+'</td><td style="vertical-align:middle;">'+skills[i]['dislikes']+'</td></tr>';
}

// mprint("innertable",innerTable);

document.write(innerTable);





