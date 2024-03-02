//require nos permite traer path//
//path es de node y permite movernos entre las carpetas//
const path= require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin')
//este modulo es un objeto donde se guardan las configuraciones de webpack//
module.exports = {
    //donde estarán los datos de la app//
    entry: './src/index.js',
    //donde se guarda el resultado del proyecto compilado por webpack//
    output: {
        //path indica en que carpeta va a estar//
        //trae path de node y le indica que ponga la nueva carpeta dentro de dist//
        path: path.resolve(__dirname,'dist' ),
        //indica el nombre del nuevo archivo que se genere//
        filename: 'main.js'
    },
    //indica las extensiones que usara el proyecto//
    resolve: {
        extensions: ['.js'],
    },
    //indica los modulos que usara el proyecto//
    module: {
        //indicamos los elementos que usaremos//
        rules: [
            {   
                //indica que tipo de archivos seran excluidos
                test: /\.js?$/,
                //indica en que carpeta estan los archivos que deben ser excluidos//
                exclude: /node_modules/,
                //indicamos el loador que usaremos para trabajar nuestro codigo//
                use: {
                    loader:'babel-loader'
                }

            }
        ]
    },
    //indica los plugins que usará el proyecto//
    plugins: [
        new HtmlWebPackPlugin({
            //indica como a un archivo html le inyectamos un valor//
            inject: true,
            //donde se encuentra el template principal//
            template: './public/index.html',
            //indica a donde enviará el nuevo archivo//
            filename: './index.html'

        }),
        new CopyWebPackPlugin( {
            //indica que es lo que necesitamos//
            patterns: [{from: './src/styles/styles.css',
            //indica donde lo va a copiar//
            to: ''}]
        })
    ]
}
