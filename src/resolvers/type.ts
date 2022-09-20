import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/utils';

const type: IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Race: {
        circuit: parent => parent.Circuit
    },
    Circuit: {
        location: parent => parent.Location
    },
    Location: {
        country: parent => parent.country,
        locality: parent => parent.locality,
    }
};

export default type;