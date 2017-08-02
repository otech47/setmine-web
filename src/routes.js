import React from 'react'
import {
    Switch
} from 'react-router-dom'
import RouteWithSubRoutes from './components/RouteWithSubRoutes'

// top level pages
import {
    About,
    Artists,
    ArtistDetail,
    Events,
    EventDetail,
    FestivalDetail,
    Home,
    LandingPage ,
    Legal,
    MixDetail,
    Search,
    Setmusic,
    Sets,
    Setstory,
} from './pages'

import Recent from './components/Recent'
import Popular from './components/Popular'
import Mixes from './components/Mixes'
import Festivals from './components/Festivals'

const routeConfig = [
    {
        path: '/',
        exact: true,
        component: LandingPage,
        title: 'Setmine'
    },
    {
        path: '/',
        component: Sets,
        title: 'Sets',
        routes: [
            {
                path: '/recent',
                component: Recent
            },
            {
                path: '/play/:id',
                component: Recent
            },
            {
                path: '/popular',
                component: Popular
            },
            {
                path: '/mixes',
                component: Mixes
            },
            {
                path: '/festivals',
                component: Festivals
            }
        ]
    },
    // {
    //     path: '/home',
    //     component: Home,
    //     title: 'Home',
    //     route: [
    //         {
    //             path: '/home/favorites',
    //             component: Favorites
    //         },
    //         {
    //             path: '/home/recommended-sets',
    //             component: NewSets
    //         },
    //         {
    //             path: '/home/recommended-events',
    //             component: NewEvents
    //         }
    //     ]
    // },
    // {
    //     path: '/search/:query',
    //     component: Home,
    //     title: 'Home'
    // },
    // {
    //     path: '/legal',
    //     component: Legal,
    //     title: 'DMCA Notice'
    // }
]

const routes = (
    <Switch>
        {
            routeConfig.map((route, i) => (
                <RouteWithSubRoutes path={route.path} {...route} />
            ))
        }
    </Switch>
)

export default routes;

// const oldRoutes =  (
//     <Route path='/' component={App}>
//         <Route components={{ main: Events, navbar: NavEvents }}>
//             <Route path='upcoming-events' component={UpcomingEvents} />
//             <Route path='closest-events' component={ClosestEvents} />
//             <Route path='featured-events' component={FeaturedEvents} />
//         </Route>
//         <Route path='search' components={{ main: SearchPage, navbar: NavSearch }} />
//         <Route path='artists' components={{ main: Artists }} />
//         <Route components={{ main: ArtistDetail }}>
//             <IndexRedirect to='artists/:artist' />
//             <Route path='artists/:artist' component={SetContainer} />
//             <Route path='artists/:artist/events' component={EventContainer} />
//         </Route>

//         <Route path='venue/:venue' component={VenueDetail} />
//         <Route path='event/:event' component={EventDetail} />
//         <Route path='festival/:festival' component={FestivalDetail} />
//         <Route path='mix/:mix' component={MixDetail} />
//         <Route path='legal' component={DMCA} />
//         <Route path='about' component={About} />
//         <Route path='setstory' component={SetstoryLandingPage} />

//         <Redirect from='/sets' to='/recent' />
//         <Redirect from='/sets/popular' to='/popular' />
//         <Redirect from='/sets/mixes' to='/mixes' />
//         <Redirect from='/sets/festivals' to='/festivals' />
//         <Redirect from='/events' to='/upcoming-events' />
//         <Redirect from='/events/closest' to='/closest-events' />
//         <Redirect from='/events/featured' to='/featured-events' />
//         <Redirect from='/home' to='/stream' />
//         <Redirect from='/home/favorites' to='/favorites' />
//         <Redirect from='/home/sets' to='/recommended-sets' />
//         <Redirect from='/home/events' to='/recommended-events' />

//         <Redirect from='/browse/:artist/artist' to='/artist/:artist' />
//         <Redirect from='/browse/:festival/festival' to='/festival/:festival' />
//         <Redirect from='/browse/:mix/mix' to='/mix/:mix' />
//         <Redirect from='/event/:eventID' to='/event/:eventID' />
//         <Redirect from='/offer/:offerId' to='/' />
//     </Route>
// )
