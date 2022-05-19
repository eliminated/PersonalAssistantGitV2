const activites = [
    '-!help',
    'Coding with VS Code',
    'Automating your services',
    'Anytime, anywhere'
];

module.exports = (client) => {
    console.log(`${client.user.username} is ready to serve!`);
    setInterval(() => {
        // Generate a random number between 1 and the list length
        const index = Math.floor(Math.random() * (activites.length - 1) + 1);
        const newActivity = activites[index];

        client.user.setActivity(newActivity);
    }, 10000);
};