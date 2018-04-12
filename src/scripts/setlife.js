import path from 'path';

export default {
    clearLandingPage: () => {
        var fs = require('fs');

        console.log('clearLandingPage')
        console.log(process.cwd())
        var templatePath = path.join(process.cwd(), 'src/templates', 'component.ejs');
        var destinationPath = path.join(process.cwd(), 'src/components', 'LandingPage.jsx');

        console.log(fs);

        fs.readFile(templatePath, 'utf8', function(err, data) {
            var component = ejs.render(data, {
                name: 'LandingPage',
                redux: true
            });

            fs.writeFile(destinationPath, component);
            console.log('Cleared LandingPage...');
        });
    }
}