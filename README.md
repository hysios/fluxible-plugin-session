#fluxible plugin session

A plugin to join the session to FluxibleContext for [Fluxible](http://fluxible.io)


#usage  

###Server entry
```javascript
import Fluxible from 'fluxible'
import sessionPlugin from 'fluxible-plugin-session';
import server from 'express';
import cookie from 'cookie-parser';
import session from 'express-session';
import App from './component/App';

const server = express();

const app = new Fluxible({
    component : App
})

app.plug(sessionPlugin());//Add plugin to app

app.use(cookie());
app.use(session({//Add session to server
    ...
}));

server.use((req, res, next) => {
    app.createContext({//Join the server session to app context
        session: req.session
    })

})

```

###Login Action
```javascript
export defalut (context, payload, done) => {
    context.setSession('user',{
        name: "test",
        id: 1
    });
    done();
}
```

###Ohter Action
```javascript
export defalut (context, payload, done) => {
    const user = context.getSession('user');
    //or
    const session = context.getSession();
    
    //Do something...
    done();
}
```