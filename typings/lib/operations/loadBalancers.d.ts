import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClient } from "../networkManagementClient";
/** Class representing a LoadBalancers. */
export declare class LoadBalancers {
    private readonly client;
    /**
     * Create a LoadBalancers.
     * @param {NetworkManagementClient} client Reference to the service client.
     */
    constructor(client: NetworkManagementClient);
    /**
     * Deletes the specified load balancer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified load balancer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {LoadBalancersGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, options?: Models.LoadBalancersGetOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates a load balancer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {LoadBalancer} parameters Parameters supplied to the create or update
     * load balancer operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, parameters: Models.LoadBalancer, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all the load balancers in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listAllWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all the load balancers in a resource group.
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
     * Deletes the specified load balancer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates a load balancer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {LoadBalancer} parameters Parameters supplied to the create or update
     * load balancer operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, parameters: Models.LoadBalancer, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all the load balancers in a subscription.
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
    listAllNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all the load balancers in a resource group.
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
     * Deletes the specified load balancer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
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
    deleteMethod(resourceGroupName: string, loadBalancerName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified load balancer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {LoadBalancersGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.LoadBalancer} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancer} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, loadBalancerName: string): Promise<Models.LoadBalancer>;
    get(resourceGroupName: string, loadBalancerName: string, options: Models.LoadBalancersGetOptionalParams): Promise<Models.LoadBalancer>;
    get(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.LoadBalancer>): void;
    get(resourceGroupName: string, loadBalancerName: string, options: Models.LoadBalancersGetOptionalParams, callback: msRest.ServiceCallback<Models.LoadBalancer>): void;
    /**
     * Creates or updates a load balancer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {LoadBalancer} parameters Parameters supplied to the create or update
     * load balancer operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.LoadBalancer} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancer} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, loadBalancerName: string, parameters: Models.LoadBalancer): Promise<Models.LoadBalancer>;
    createOrUpdate(resourceGroupName: string, loadBalancerName: string, parameters: Models.LoadBalancer, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancer>;
    createOrUpdate(resourceGroupName: string, loadBalancerName: string, parameters: Models.LoadBalancer, callback: msRest.ServiceCallback<Models.LoadBalancer>): void;
    createOrUpdate(resourceGroupName: string, loadBalancerName: string, parameters: Models.LoadBalancer, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancer>): void;
    /**
     * Gets all the load balancers in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.LoadBalancerListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancerListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAll(): Promise<Models.LoadBalancerListResult>;
    listAll(options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerListResult>;
    listAll(callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
    listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
    /**
     * Gets all the load balancers in a resource group.
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
     *                      {Models.LoadBalancerListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancerListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.LoadBalancerListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
    /**
     * Deletes the specified load balancer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
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
    beginDeleteMethod(resourceGroupName: string, loadBalancerName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a load balancer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {LoadBalancer} parameters Parameters supplied to the create or update
     * load balancer operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.LoadBalancer} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancer} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, parameters: Models.LoadBalancer): Promise<Models.LoadBalancer>;
    beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, parameters: Models.LoadBalancer, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancer>;
    beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, parameters: Models.LoadBalancer, callback: msRest.ServiceCallback<Models.LoadBalancer>): void;
    beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, parameters: Models.LoadBalancer, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancer>): void;
    /**
     * Gets all the load balancers in a subscription.
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
     *                      {Models.LoadBalancerListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancerListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAllNext(nextPageLink: string): Promise<Models.LoadBalancerListResult>;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerListResult>;
    listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
    /**
     * Gets all the load balancers in a resource group.
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
     *                      {Models.LoadBalancerListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancerListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.LoadBalancerListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
}
