import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClient } from "../networkManagementClient";
/** Class representing a AvailableEndpointServices. */
export declare class AvailableEndpointServices {
    private readonly client;
    /**
     * Create a AvailableEndpointServices.
     * @param {NetworkManagementClient} client Reference to the service client.
     */
    constructor(client: NetworkManagementClient);
    /**
     * List what values of endpoint services are available for use.
     *
     * @param {string} location The location to check available endpoint services.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(location: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * List what values of endpoint services are available for use.
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
     * List what values of endpoint services are available for use.
     *
     * @param {string} location The location to check available endpoint services.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.EndpointServicesListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.EndpointServicesListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(location: string): Promise<Models.EndpointServicesListResult>;
    list(location: string, options: msRest.RequestOptionsBase): Promise<Models.EndpointServicesListResult>;
    list(location: string, callback: msRest.ServiceCallback<Models.EndpointServicesListResult>): void;
    list(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EndpointServicesListResult>): void;
    /**
     * List what values of endpoint services are available for use.
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
     *                      {Models.EndpointServicesListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.EndpointServicesListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.EndpointServicesListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.EndpointServicesListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.EndpointServicesListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EndpointServicesListResult>): void;
}
