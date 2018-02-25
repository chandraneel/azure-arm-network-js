import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClient } from "../networkManagementClient";
/** Class representing a NetworkSecurityGroups. */
export declare class NetworkSecurityGroups {
    private readonly client;
    /**
     * Create a NetworkSecurityGroups.
     * @param {NetworkManagementClient} client Reference to the service client.
     */
    constructor(client: NetworkManagementClient);
    /**
     * Deletes the specified network security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security
     * group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified network security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security
     * group.
     *
     * @param {NetworkSecurityGroupsGetOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, options?: Models.NetworkSecurityGroupsGetOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates a network security group in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security
     * group.
     *
     * @param {NetworkSecurityGroup} parameters Parameters supplied to the create
     * or update network security group operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, parameters: Models.NetworkSecurityGroup, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all network security groups in a subscription.
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
     * Gets all network security groups in a resource group.
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
     * Deletes the specified network security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security
     * group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates a network security group in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security
     * group.
     *
     * @param {NetworkSecurityGroup} parameters Parameters supplied to the create
     * or update network security group operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, parameters: Models.NetworkSecurityGroup, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all network security groups in a subscription.
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
     * Gets all network security groups in a resource group.
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
     * Deletes the specified network security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security
     * group.
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
    deleteMethod(resourceGroupName: string, networkSecurityGroupName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, networkSecurityGroupName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, networkSecurityGroupName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, networkSecurityGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified network security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security
     * group.
     *
     * @param {NetworkSecurityGroupsGetOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NetworkSecurityGroup} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkSecurityGroup} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, networkSecurityGroupName: string): Promise<Models.NetworkSecurityGroup>;
    get(resourceGroupName: string, networkSecurityGroupName: string, options: Models.NetworkSecurityGroupsGetOptionalParams): Promise<Models.NetworkSecurityGroup>;
    get(resourceGroupName: string, networkSecurityGroupName: string, callback: msRest.ServiceCallback<Models.NetworkSecurityGroup>): void;
    get(resourceGroupName: string, networkSecurityGroupName: string, options: Models.NetworkSecurityGroupsGetOptionalParams, callback: msRest.ServiceCallback<Models.NetworkSecurityGroup>): void;
    /**
     * Creates or updates a network security group in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security
     * group.
     *
     * @param {NetworkSecurityGroup} parameters Parameters supplied to the create
     * or update network security group operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NetworkSecurityGroup} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkSecurityGroup} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, parameters: Models.NetworkSecurityGroup): Promise<Models.NetworkSecurityGroup>;
    createOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, parameters: Models.NetworkSecurityGroup, options: msRest.RequestOptionsBase): Promise<Models.NetworkSecurityGroup>;
    createOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, parameters: Models.NetworkSecurityGroup, callback: msRest.ServiceCallback<Models.NetworkSecurityGroup>): void;
    createOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, parameters: Models.NetworkSecurityGroup, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkSecurityGroup>): void;
    /**
     * Gets all network security groups in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NetworkSecurityGroupListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkSecurityGroupListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAll(): Promise<Models.NetworkSecurityGroupListResult>;
    listAll(options: msRest.RequestOptionsBase): Promise<Models.NetworkSecurityGroupListResult>;
    listAll(callback: msRest.ServiceCallback<Models.NetworkSecurityGroupListResult>): void;
    listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkSecurityGroupListResult>): void;
    /**
     * Gets all network security groups in a resource group.
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
     *                      {Models.NetworkSecurityGroupListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkSecurityGroupListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.NetworkSecurityGroupListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkSecurityGroupListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.NetworkSecurityGroupListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkSecurityGroupListResult>): void;
    /**
     * Deletes the specified network security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security
     * group.
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
    beginDeleteMethod(resourceGroupName: string, networkSecurityGroupName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, networkSecurityGroupName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, networkSecurityGroupName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, networkSecurityGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a network security group in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security
     * group.
     *
     * @param {NetworkSecurityGroup} parameters Parameters supplied to the create
     * or update network security group operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NetworkSecurityGroup} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkSecurityGroup} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, parameters: Models.NetworkSecurityGroup): Promise<Models.NetworkSecurityGroup>;
    beginCreateOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, parameters: Models.NetworkSecurityGroup, options: msRest.RequestOptionsBase): Promise<Models.NetworkSecurityGroup>;
    beginCreateOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, parameters: Models.NetworkSecurityGroup, callback: msRest.ServiceCallback<Models.NetworkSecurityGroup>): void;
    beginCreateOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, parameters: Models.NetworkSecurityGroup, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkSecurityGroup>): void;
    /**
     * Gets all network security groups in a subscription.
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
     *                      {Models.NetworkSecurityGroupListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkSecurityGroupListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAllNext(nextPageLink: string): Promise<Models.NetworkSecurityGroupListResult>;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkSecurityGroupListResult>;
    listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkSecurityGroupListResult>): void;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkSecurityGroupListResult>): void;
    /**
     * Gets all network security groups in a resource group.
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
     *                      {Models.NetworkSecurityGroupListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkSecurityGroupListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.NetworkSecurityGroupListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkSecurityGroupListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkSecurityGroupListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkSecurityGroupListResult>): void;
}
