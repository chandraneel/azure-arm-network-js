import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClient } from "../networkManagementClient";
/** Class representing a ApplicationSecurityGroups. */
export declare class ApplicationSecurityGroups {
    private readonly client;
    /**
     * Create a ApplicationSecurityGroups.
     * @param {NetworkManagementClient} client Reference to the service client.
     */
    constructor(client: NetworkManagementClient);
    /**
     * Deletes the specified application security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationSecurityGroupName The name of the application
     * security group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, applicationSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the specified application security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationSecurityGroupName The name of the application
     * security group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, applicationSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates an application security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationSecurityGroupName The name of the application
     * security group.
     *
     * @param {ApplicationSecurityGroup} parameters Parameters supplied to the
     * create or update ApplicationSecurityGroup operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all application security groups in a subscription.
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
     * Gets all the application security groups in a resource group.
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
     * Deletes the specified application security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationSecurityGroupName The name of the application
     * security group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, applicationSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates an application security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationSecurityGroupName The name of the application
     * security group.
     *
     * @param {ApplicationSecurityGroup} parameters Parameters supplied to the
     * create or update ApplicationSecurityGroup operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all application security groups in a subscription.
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
     * Gets all the application security groups in a resource group.
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
     * Deletes the specified application security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationSecurityGroupName The name of the application
     * security group.
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
    deleteMethod(resourceGroupName: string, applicationSecurityGroupName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, applicationSecurityGroupName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, applicationSecurityGroupName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, applicationSecurityGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the specified application security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationSecurityGroupName The name of the application
     * security group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationSecurityGroup} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationSecurityGroup} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, applicationSecurityGroupName: string): Promise<Models.ApplicationSecurityGroup>;
    get(resourceGroupName: string, applicationSecurityGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroup>;
    get(resourceGroupName: string, applicationSecurityGroupName: string, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroup>): void;
    get(resourceGroupName: string, applicationSecurityGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroup>): void;
    /**
     * Creates or updates an application security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationSecurityGroupName The name of the application
     * security group.
     *
     * @param {ApplicationSecurityGroup} parameters Parameters supplied to the
     * create or update ApplicationSecurityGroup operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationSecurityGroup} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationSecurityGroup} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup): Promise<Models.ApplicationSecurityGroup>;
    createOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup, options: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroup>;
    createOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroup>): void;
    createOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroup>): void;
    /**
     * Gets all application security groups in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationSecurityGroupListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationSecurityGroupListResult}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAll(): Promise<Models.ApplicationSecurityGroupListResult>;
    listAll(options: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroupListResult>;
    listAll(callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
    listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
    /**
     * Gets all the application security groups in a resource group.
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
     *                      {Models.ApplicationSecurityGroupListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationSecurityGroupListResult}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.ApplicationSecurityGroupListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroupListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
    /**
     * Deletes the specified application security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationSecurityGroupName The name of the application
     * security group.
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
    beginDeleteMethod(resourceGroupName: string, applicationSecurityGroupName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, applicationSecurityGroupName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, applicationSecurityGroupName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, applicationSecurityGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates an application security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationSecurityGroupName The name of the application
     * security group.
     *
     * @param {ApplicationSecurityGroup} parameters Parameters supplied to the
     * create or update ApplicationSecurityGroup operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationSecurityGroup} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationSecurityGroup} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup): Promise<Models.ApplicationSecurityGroup>;
    beginCreateOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup, options: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroup>;
    beginCreateOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroup>): void;
    beginCreateOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroup>): void;
    /**
     * Gets all application security groups in a subscription.
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
     *                      {Models.ApplicationSecurityGroupListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationSecurityGroupListResult}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAllNext(nextPageLink: string): Promise<Models.ApplicationSecurityGroupListResult>;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroupListResult>;
    listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
    /**
     * Gets all the application security groups in a resource group.
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
     *                      {Models.ApplicationSecurityGroupListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationSecurityGroupListResult}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ApplicationSecurityGroupListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroupListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
}
