const Controller = require('./Controller')
const args = process.argv.slice(2)
const command = args[0]

switch (command) {
    default:
        console.log('Input true Command');
        break;
    case 'create:buku':
        Controller.createBuku(args[1],args[2],args[3],args[4],args[5])
        break;
    case 'create:writer':
        Controller.createWriter(args[1],args[2]);
        break;
    case 'create:category':
        Controller.createCategory(args[1])
        break;
    case 'show':
        Controller.show(args[1])
        break;
    case 'delete':
        Controller.delete(args[1],args[2])
        break;
    case 'update':
        Controller.updateBuku(args[1],args[2],args[3],args[4])
        break;
    case 'all':
        Controller.all()
        break
}