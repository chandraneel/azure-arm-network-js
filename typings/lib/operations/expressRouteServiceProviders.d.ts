import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClient } from "../networkManagementClient";
/** Class representing a ExpressRouteServiceProviders. */
export declare class ExpressRouteServiceProviders {
    private readonly client;
    /**
     * Create a ExpressRouteServiceProviders.
     * @param {NetworkManagementClient} client Reference to the service client.
     */
    constructor(client: NetworkManagementClient);
    /**
     * Gets all the available express route service providers.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all the available express route service providers.
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
     * Gets all the available express route service providers.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteServiceProviderListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ExpressRouteServiceProviderListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.ExpressRouteServiceProviderListResult>;
    list(options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteServiceProviderListResult>;
    list(callback: msRest.ServiceCallback<Models.ExpressRouteServiceProviderListResult>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteServiceProviderListResult>): void;
    /**
     * Gets all the available express route service providers.
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
     *                      {Models.ExpressRouteServiceProviderListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ExpressRouteServiceProviderListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ExpressRouteServiceProviderListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteServiceProviderListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExpressRouteServiceProviderListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteServiceProviderListResult>): void;
}
