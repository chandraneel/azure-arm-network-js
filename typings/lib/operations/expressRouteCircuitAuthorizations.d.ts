import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClient } from "../networkManagementClient";
/** Class representing a ExpressRouteCircuitAuthorizations. */
export declare class ExpressRouteCircuitAuthorizations {
    private readonly client;
    /**
     * Create a ExpressRouteCircuitAuthorizations.
     * @param {NetworkManagementClient} client Reference to the service client.
     */
    constructor(client: NetworkManagementClient);
    /**
     * Deletes the specified authorization from the specified express route
     * circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} authorizationName The name of the authorization.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, circuitName: string, authorizationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified authorization from the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} authorizationName The name of the authorization.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, circuitName: string, authorizationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates an authorization in the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} authorizationName The name of the authorization.
     *
     * @param {ExpressRouteCircuitAuthorization} authorizationParameters Parameters
     * supplied to the create or update express route circuit authorization
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: Models.ExpressRouteCircuitAuthorization, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all authorizations in an express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the circuit.
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
     * Deletes the specified authorization from the specified express route
     * circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} authorizationName The name of the authorization.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, circuitName: string, authorizationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates an authorization in the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} authorizationName The name of the authorization.
     *
     * @param {ExpressRouteCircuitAuthorization} authorizationParameters Parameters
     * supplied to the create or update express route circuit authorization
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: Models.ExpressRouteCircuitAuthorization, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all authorizations in an express route circuit.
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
     * Deletes the specified authorization from the specified express route
     * circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} authorizationName The name of the authorization.
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
    deleteMethod(resourceGroupName: string, circuitName: string, authorizationName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, circuitName: string, authorizationName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, circuitName: string, authorizationName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, circuitName: string, authorizationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified authorization from the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} authorizationName The name of the authorization.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitAuthorization} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitAuthorization} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, circuitName: string, authorizationName: string): Promise<Models.ExpressRouteCircuitAuthorization>;
    get(resourceGroupName: string, circuitName: string, authorizationName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitAuthorization>;
    get(resourceGroupName: string, circuitName: string, authorizationName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitAuthorization>): void;
    get(resourceGroupName: string, circuitName: string, authorizationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitAuthorization>): void;
    /**
     * Creates or updates an authorization in the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} authorizationName The name of the authorization.
     *
     * @param {ExpressRouteCircuitAuthorization} authorizationParameters Parameters
     * supplied to the create or update express route circuit authorization
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitAuthorization} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitAuthorization} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: Models.ExpressRouteCircuitAuthorization): Promise<Models.ExpressRouteCircuitAuthorization>;
    createOrUpdate(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: Models.ExpressRouteCircuitAuthorization, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitAuthorization>;
    createOrUpdate(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: Models.ExpressRouteCircuitAuthorization, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitAuthorization>): void;
    createOrUpdate(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: Models.ExpressRouteCircuitAuthorization, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitAuthorization>): void;
    /**
     * Gets all authorizations in an express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the circuit.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.AuthorizationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.AuthorizationListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, circuitName: string): Promise<Models.AuthorizationListResult>;
    list(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase): Promise<Models.AuthorizationListResult>;
    list(resourceGroupName: string, circuitName: string, callback: msRest.ServiceCallback<Models.AuthorizationListResult>): void;
    list(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationListResult>): void;
    /**
     * Deletes the specified authorization from the specified express route
     * circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} authorizationName The name of the authorization.
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
    beginDeleteMethod(resourceGroupName: string, circuitName: string, authorizationName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, circuitName: string, authorizationName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, circuitName: string, authorizationName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, circuitName: string, authorizationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates an authorization in the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} authorizationName The name of the authorization.
     *
     * @param {ExpressRouteCircuitAuthorization} authorizationParameters Parameters
     * supplied to the create or update express route circuit authorization
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitAuthorization} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitAuthorization} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: Models.ExpressRouteCircuitAuthorization): Promise<Models.ExpressRouteCircuitAuthorization>;
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: Models.ExpressRouteCircuitAuthorization, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitAuthorization>;
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: Models.ExpressRouteCircuitAuthorization, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitAuthorization>): void;
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: Models.ExpressRouteCircuitAuthorization, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitAuthorization>): void;
    /**
     * Gets all authorizations in an express route circuit.
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
     *                      {Models.AuthorizationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.AuthorizationListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.AuthorizationListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.AuthorizationListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AuthorizationListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationListResult>): void;
}
