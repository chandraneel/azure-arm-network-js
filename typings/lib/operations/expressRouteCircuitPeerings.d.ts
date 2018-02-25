import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClient } from "../networkManagementClient";
/** Class representing a ExpressRouteCircuitPeerings. */
export declare class ExpressRouteCircuitPeerings {
    private readonly client;
    /**
     * Create a ExpressRouteCircuitPeerings.
     * @param {NetworkManagementClient} client Reference to the service client.
     */
    constructor(client: NetworkManagementClient);
    /**
     * Deletes the specified peering from the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified authorization from the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates a peering in the specified express route circuits.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {ExpressRouteCircuitPeering} peeringParameters Parameters supplied to
     * the create or update express route circuit peering operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all peerings in a specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified peering from the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates a peering in the specified express route circuits.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {ExpressRouteCircuitPeering} peeringParameters Parameters supplied to
     * the create or update express route circuit peering operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all peerings in a specified express route circuit.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified peering from the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified authorization from the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitPeering} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitPeering} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, circuitName: string, peeringName: string): Promise<Models.ExpressRouteCircuitPeering>;
    get(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitPeering>;
    get(resourceGroupName: string, circuitName: string, peeringName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): void;
    get(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): void;
    /**
     * Creates or updates a peering in the specified express route circuits.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {ExpressRouteCircuitPeering} peeringParameters Parameters supplied to
     * the create or update express route circuit peering operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitPeering} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitPeering} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering): Promise<Models.ExpressRouteCircuitPeering>;
    createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitPeering>;
    createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): void;
    createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): void;
    /**
     * Gets all peerings in a specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitPeeringListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitPeeringListResult}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, circuitName: string): Promise<Models.ExpressRouteCircuitPeeringListResult>;
    list(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitPeeringListResult>;
    list(resourceGroupName: string, circuitName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeeringListResult>): void;
    list(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeeringListResult>): void;
    /**
     * Deletes the specified peering from the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a peering in the specified express route circuits.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {ExpressRouteCircuitPeering} peeringParameters Parameters supplied to
     * the create or update express route circuit peering operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitPeering} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitPeering} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering): Promise<Models.ExpressRouteCircuitPeering>;
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitPeering>;
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): void;
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: Models.ExpressRouteCircuitPeering, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeering>): void;
    /**
     * Gets all peerings in a specified express route circuit.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitPeeringListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitPeeringListResult}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ExpressRouteCircuitPeeringListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitPeeringListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeeringListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitPeeringListResult>): void;
}
