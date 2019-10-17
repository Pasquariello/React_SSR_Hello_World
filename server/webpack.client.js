const path = require('path');
// allow us to  write jsx on server convert to es5 so it can be run 
module.exports = {
    // Tell webpack the root file of our
    // server application - entry point
    entry: './src/client/client.js',

    // tell wp where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') // needs to be publically available to anyone that needs it
    },

    // tell webpack to run babel on every file it runs through
    // change code to es5
    module: {
        rules: [
            {
                test: /\.js?$/, // used to test against every file name and only apply to js files
                loader: 'babel-loader', // executes babale
                exclude: /node_modules/, //dont run over files over certain directories
                options: {
                    presets: [
                        'react', // take jsx and turn into normal js calls
                        'stage-0',
                        ['env', { targets: { browserss: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }
};