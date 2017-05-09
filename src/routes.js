import React from 'react'
import IndexRoute from 'react-router/lib/IndexRoute'
import Route from 'react-router/lib/Route'
import IndexRedirect from 'react-router/lib/IndexRedirect'
import Redirect from 'react-router/lib/Redirect'

// components
import App from './components/App'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Events from './components/Events'
import Home from './components/Home'
import Sets from './components/Sets'
import SearchPage from './components/SearchPage'

import FeaturedEvents from './components/FeaturedEvents'
import UpcomingEvents from './components/UpcomingEvents'
import ClosestEvents from './components/ClosestEvents'

import ArtistDetail from './components/ArtistDetail'
import FestivalDetail from './components/FestivalDetail'
import MixDetail from './components/MixDetail'
import EventDetail from './components/EventDetail'
import VenueDetail from './components/VenueDetail'

import Favorites from './components/Favorites'
import Stream from './components/Stream'
import NewEvents from './components/NewEvents'
import NewSets from './components/NewSets'

import Recent from './components/Recent'
import Popular from './components/Popular'
import Artists from './components/Artists'
import Festivals from './components/Festivals'
import Mixes from './components/Mixes'

import SetContainer from './components/SetContainer'
import EventContainer from './components/EventContainer'
import ArtistTileContainer from './components/ArtistTileContainer'

import DMCA from './components/DMCA'
import Setmusic from './components/Setmusic'
import SetstoryLandingPage from './components/SetstoryLandingPage'
import About from './components/About'

import { NavHome, NavSets, NavEvents, NavSearch } from './components/Navbar'

function requireAuth(nextState, replace) {
    // TODO check if logged in
    console.log(nextState)
    // replace({
    //     pathname,
    //     state
    // })
}

export default (
    <Route path='/' component={App}>
        <IndexRoute components={{ main: LandingPage }} />
        <Route components={{ main: Sets, navbar: NavSets }}>
            <Route path='play/:set' component={Recent} />
            <Route path='recent' component={Recent} />
            <Route path='popular' component={Popular} />
            <Route path='mixes' component={Mixes} />
            <Route path='festivals' component={Festivals} />
        </Route>
        <Route components={{ main: Home, navbar: NavHome }}>
            <Route
                path='favorites'
                component={Favorites}
                onEnter={requireAuth}
            />
            <Route path='recommended-sets' component={NewSets} />
            <Route path='recommended-events' component={NewEvents} />
        </Route>
        <Route components={{ main: Events, navbar: NavEvents }}>
            <Route path='upcoming-events' component={UpcomingEvents} />
            <Route path='closest-events' component={ClosestEvents} />
            <Route path='featured-events' component={FeaturedEvents} />
        </Route>
        <Route path='artists' components={{ main: Artists }} />
        <Route path='search' components={{ main: SearchPage, navbar: NavSearch }} />
        <Route components={{ main: ArtistDetail }}>
            <IndexRedirect to='artists/:artist' />
            <Route path='artists/:artist' component={SetContainer} />
            <Route path='artists/:artist/events' component={EventContainer} />
        </Route>

        <Route path='venue/:venue' component={VenueDetail} />
        <Route path='event/:event' component={EventDetail} />
        <Route path='festival/:festival' component={FestivalDetail} />
        <Route path='mix/:mix' component={MixDetail} />
        <Route path='legal' component={DMCA} />
        <Route path='about' component={About} />
        <Route path='setstory' component={SetstoryLandingPage} />
        {/* Redirects */}
        <Redirect from='/sets' to='/recent' />
        <Redirect from='/sets/popular' to='/popular' />
        <Redirect from='/sets/mixes' to='/mixes' />
        <Redirect from='/sets/festivals' to='/festivals' />
        <Redirect from='/events' to='/upcoming-events' />
        <Redirect from='/events/closest' to='/closest-events' />
        <Redirect from='/events/featured' to='/featured-events' />
        <Redirect from='/home' to='/stream' />
        <Redirect from='/home/favorites' to='/favorites' />
        <Redirect from='/home/sets' to='/recommended-sets' />
        <Redirect from='/home/events' to='/recommended-events' />
        {/* Redirects from Setmine v5.0 */}
        <Redirect from='/browse/:artist/artist' to='/artist/:artist' />
        <Redirect from='/browse/:festival/festival' to='/festival/:festival' />
        <Redirect from='/browse/:mix/mix' to='/mix/:mix' />
        <Redirect from='/event/:eventID' to='/event/:eventID' />
        <Redirect from='/offer/:offerId' to='/' />
    </Route>
)

// export default (
//     <Route path='/' component={App}>
//         <IndexRoute component={LandingPage} />

//         <Route path='play/:set' component={Sets}>
//             <IndexRoute component={Recent} />
//             <Route path='mixes' component={Mixes} />
//             <Route path='popular' component={Popular} />
//             <Route path='festivals' component={Festivals} />
//         </Route>

//         <Route path='sets' component={Sets}>
//             <IndexRoute component={Recent} />
//             <Route path='mixes' component={Mixes} />
//             <Route path='popular' component={Popular}/>
//             <Route path='festivals' component={Festivals} />
//         </Route>

//         <Route path='home' component={Home}>
//             <IndexRoute component={Stream} />
//             <Route path='favorites' component={Favorites} />
//             <Route path='sets' component={NewSets} />
//             <Route path='events' component={NewEvents} />
//         </Route>

//         <Route path='events' component={Events}>
//             <IndexRoute component={UpcomingEvents} />
//             <Route path='closest' component={ClosestEvents} />
//             <Route path='featured' component={FeaturedEvents} />
//         </Route>

//         <Route path='artists' component={Artists} />
//         <Route path='search?query' component={SearchPage} />

//         <Route path='artist/:artist' component={ArtistDetail}>
//             <IndexRoute component={SetContainer} />
//             <Route path='events' component={EventContainer} />
//         </Route>
        
//         <Route path='venue/:venue' component={VenueDetail} />
//         <Route path='event/:event' component={EventDetail} />
//         <Route path='festival/:festival' component={FestivalDetail} />
//         <Route path='mix/:mix' component={MixDetail} />
//         <Route path='legal' component={DMCA} />

//         {/*Redirects from Setmine v5.0*/}
//         <Redirect from='/browse/:artist/artist' to='/artist/:artist' />
//         <Redirect from='/browse/:festival/festival' to='/festival/:festival' />
//         <Redirect from='/browse/:mix/mix' to='/mix/:mix' />
//         <Redirect from='/event/:eventID' to='/event/:eventID' />
//         <Redirect from='/offer/:offerId' to='/' />

//         <Route path='about' component={About} />
//         <Route path='setstory' component={SetstoryLandingPage} />
//     </Route>
// )