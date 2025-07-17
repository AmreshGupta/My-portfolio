constcoder={
name:'Anjali jaiswal',
skills:['React', 'NextJS', 'Redux', 'Webpack', 'Javascript', 'MySql', 'GraphQl', 'Docker', 'AWS'],
hardWorker:true,
quickLearner:true,
problemSolver:true,
hireable:function() {
return(
this.hardWorker&&
this.problemSolver&&
this.skills.length>=5
);
};
};