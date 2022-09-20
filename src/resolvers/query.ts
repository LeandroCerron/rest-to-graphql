import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasonList(_: void, __:any, { dataSources }){
            return await dataSources.seasons.getSeasons().then(
                (data:any) => data.MRData.SeasonTable.Seasons
            );
        },
        async raceList(_:void, __void, { dataSources }){
            return await dataSources.races.getRaces().then(
                (data:any) => data.MRData.RaceTable.Races
            )
        }
    }
};

export default query;