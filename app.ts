import express from 'express';
import config from './src/utils/default';
import cors from 'cors';

// Create apps routes
import decoderRoutes from './src/routes/decoder-routes';
import ShortlinkRoutes from './src/routes/shortlink-routes'
import RequimentRoutes from './src/routes/requiement-routes'

const app = express();
const port = config.local.port;

// Comprehensive CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware to handle preflight requests
app.options('*', cors(corsOptions));

app.use(express.json());

// Routes
app.use(`/${config.local.version}/decoder`, decoderRoutes);
app.use(`/${config.local.version}/shortlink`, ShortlinkRoutes);
app.use(`/${config.local.version}/`, RequimentRoutes);

app.get('/health', (_, res) => {
    res.json({
        status: 'ok',
        message: `Server running on port ${config.local.port} in ${config.debug ? 'debug' : 'production'} mode`,
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port} in ${config.debug ? 'debug' : 'production'} mode`);
});

// import express from 'express';
// import config from './src/utils/default';
// import cors from 'cors';
//
// // Create apps routes
// import decoderRoutes from './src/routes/decoder-routes';
// import ShortlinkRoutes from './src/routes/shortlink-routes'
// import RequimentRoutes from './src/routes/requiement-routes'
//
// const app = express();
// const port = config.local.port;
//
//
// app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST']
// }));
//
//
// app.use(`/${config.local.version}/decoder`, decoderRoutes);
// app.use(`/${config.local.version}/shortlink`, ShortlinkRoutes);
// app.use(`/${config.local.version}/`, RequimentRoutes);
//
// app.get('/health', (_, res) => {
//     res.json({
//         status: 'ok',
//         message: `Server running on port ${config.local.port} in ${config.debug ? 'debug' : 'production'} mode`,
//         timestamp: new Date().toISOString()
//     });
// });
//
// app.listen(port, () => {
//     console.log(`Server running on port ${port} in ${config.debug ? 'debug' : 'production'} mode`);
// });