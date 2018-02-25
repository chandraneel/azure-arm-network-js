import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClient } from "../networkManagementClient";
/** Class representing a LocalNetworkGateways. */
export declare class LocalNetworkGateways {
    private readonly client;
    /**
     * Create a LocalNetworkGateways.
     * @param {NetworkManagementClient} client Reference to the service client.
     */
    constructor(client: NetworkManagementClient);
    /**
     * Creates or updates a local network gateway in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} localNetworkGatewayName The name of the local network
     * gateway.
     *
     * @param {LocalNetworkGateway} parameters Parameters supplied to the create or
     * update local network gateway operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.LocalNetworkGateway, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified local network gateway in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} localNetworkGatewayName The name of the local network
     * gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, localNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified local network gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} localNetworkGatewayName The name of the local network
     * gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, localNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all the local network gateways in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates a local network gateway in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} localNetworkGatewayName The name of the local network
     * gateway.
     *
     * @param {LocalNetworkGateway} parameters Parameters supplied to the create or
     * update local network gateway operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.LocalNetworkGateway, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified local network gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} localNetworkGatewayName The name of the local network
     * gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, localNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all the local network gateways in a resource group.
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
     * Creates or updates a local network gateway in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} localNetworkGatewayName The name of the local network
     * gateway.
     *
     * @param {LocalNetworkGateway} parameters Parameters supplied to the create or
     * update local network gateway operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.LocalNetworkGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LocalNetworkGateway} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.LocalNetworkGateway): Promise<Models.LocalNetworkGateway>;
    createOrUpdate(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.LocalNetworkGateway, options: msRest.RequestOptionsBase): Promise<Models.LocalNetworkGateway>;
    createOrUpdate(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.LocalNetworkGateway, callback: msRest.ServiceCallback<Models.LocalNetworkGateway>): void;
    createOrUpdate(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.LocalNetworkGateway, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LocalNetworkGateway>): void;
    /**
     * Gets the specified local network gateway in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} localNetworkGatewayName The name of the local network
     * gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.LocalNetworkGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LocalNetworkGateway} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, localNetworkGatewayName: string): Promise<Models.LocalNetworkGateway>;
    get(resourceGroupName: string, localNetworkGatewayName: string, options: msRest.RequestOptionsBase): Promise<Models.LocalNetworkGateway>;
    get(resourceGroupName: string, localNetworkGatewayName: string, callback: msRest.ServiceCallback<Models.LocalNetworkGateway>): void;
    get(resourceGroupName: string, localNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LocalNetworkGateway>): void;
    /**
     * Deletes the specified local network gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} localNetworkGatewayName The name of the local network
     * gateway.
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
    deleteMethod(resourceGroupName: string, localNetworkGatewayName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, localNetworkGatewayName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, localNetworkGatewayName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, localNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets all the local network gateways in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.LocalNetworkGatewayListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LocalNetworkGatewayListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.LocalNetworkGatewayListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.LocalNetworkGatewayListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.LocalNetworkGatewayListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LocalNetworkGatewayListResult>): void;
    /**
     * Creates or updates a local network gateway in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} localNetworkGatewayName The name of the local network
     * gateway.
     *
     * @param {LocalNetworkGateway} parameters Parameters supplied to the create or
     * update local network gateway operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.LocalNetworkGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LocalNetworkGateway} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.LocalNetworkGateway): Promise<Models.LocalNetworkGateway>;
    beginCreateOrUpdate(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.LocalNetworkGateway, options: msRest.RequestOptionsBase): Promise<Models.LocalNetworkGateway>;
    beginCreateOrUpdate(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.LocalNetworkGateway, callback: msRest.ServiceCallback<Models.LocalNetworkGateway>): void;
    beginCreateOrUpdate(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.LocalNetworkGateway, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LocalNetworkGateway>): void;
    /**
     * Deletes the specified local network gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} localNetworkGatewayName The name of the local network
     * gateway.
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
    beginDeleteMethod(resourceGroupName: string, localNetworkGatewayName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, localNetworkGatewayName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, localNetworkGatewayName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, localNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets all the local network gateways in a resource group.
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
     *                      {Models.LocalNetworkGatewayListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LocalNetworkGatewayListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.LocalNetworkGatewayListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.LocalNetworkGatewayListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LocalNetworkGatewayListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LocalNetworkGatewayListResult>): void;
}
