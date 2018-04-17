var apiModules = require('./modules');
var models = require('./models');
var types = require('./types');

var g = types.graphql;

var apiSchema = new g.GraphQLSchema(
    {
        mutation: new g.GraphQLObjectType({
            name: 'RootMutationType',

            description: 'Endpoints with POST, PUT, and DELETE functionality go here',

            fields: {
                submitStripeCharge: {
                    args: {
                        email: {
                            description: 'The user\'s email',
                            type: new g.GraphQLNonNull(g.GraphQLString)
                        },
                        stripeToken: {
                            description: 'The stripe token for this charge',
                            type: new g.GraphQLNonNull(g.GraphQLString)
                        },
                        amount: {
                            description: 'The amount for this charge',
                            type: new g.GraphQLNonNull(g.GraphQLString)
                        },
                    },

                    description: 'Submits a stripe charge',

                    type: g.GraphQLString,

                    resolve: function(root, args) {
                        console.log('Calling stripeModule.submitStripeCharge with(' + args +')');

                        return apiModules.stripeModule.submitStripeCharge(args);
                    }
                }
            }
        }),

        query: new g.GraphQLObjectType({
            name: 'RootQueryType',

            description: 'Endpoints with GET functionality go here',

            fields: {
                sampleModel: {
                    type: types.SampleModelType,
                    description: 'Fetches a data model object by specified properties',
                    args: {
                        id: {
                            description: 'Specify the data model\'s unique ID',
                            type: g.GraphQLLong
                        },
                        property: {
                            description: 'Or allow the client to specify any other properties as needed',
                            type: g.GraphQLString
                        }
                    },

                    resolve: function(root, args) {
                        return apiModules.sampleModule.publicFunction2(args);
                    }
                },

                sampleModels: {
                    type: new g.GraphQLList(types.SampleModelType),
                    description: 'Same as the above query, but returns an array of objects',
                    args: {
                        property: {
                            description: 'If multiple data models match the same specified property, they will all be returned in an array',
                            type: g.GraphQLString
                        }
                    },

                    resolve: function(root, args) {
                        return apiModules.sampleModule.publicFunction3(args);
                    }
                }
            }
        })
    }
);

module.exports = apiSchema;