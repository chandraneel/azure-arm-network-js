import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClient } from "../networkManagementClient";
/** Class representing a ApplicationGateways. */
export declare class ApplicationGateways {
    private readonly client;
    /**
     * Create a ApplicationGateways.
     * @param {NetworkManagementClient} client Reference to the service client.
     */
    constructor(client: NetworkManagementClient);
    /**
     * Deletes the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {ApplicationGateway} parameters Parameters supplied to the create or
     * update application gateway operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, applicationGatewayName: string, parameters: Models.ApplicationGateway, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists all application gateways in a resource group.
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
     * Gets all the application gateways in a subscription.
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
     * Starts the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    startWithHttpOperationResponse(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Stops the specified application gateway in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    stopWithHttpOperationResponse(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the backend health of the specified application gateway in a resource
     * group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {ApplicationGatewaysBackendHealthOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    backendHealthWithHttpOperationResponse(resourceGroupName: string, applicationGatewayName: string, options?: Models.ApplicationGatewaysBackendHealthOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists all available web application firewall rule sets.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listAvailableWafRuleSetsWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists available Ssl options for configuring Ssl policy.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listAvailableSslOptionsWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists all SSL predefined policies for configuring Ssl policy.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listAvailableSslPredefinedPoliciesWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets Ssl predefined policy with the specified policy name.
     *
     * @param {string} predefinedPolicyName Name of Ssl predefined policy.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getSslPredefinedPolicyWithHttpOperationResponse(predefinedPolicyName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {ApplicationGateway} parameters Parameters supplied to the create or
     * update application gateway operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, applicationGatewayName: string, parameters: Models.ApplicationGateway, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Starts the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginStartWithHttpOperationResponse(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Stops the specified application gateway in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginStopWithHttpOperationResponse(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the backend health of the specified application gateway in a resource
     * group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {ApplicationGatewaysBeginBackendHealthOptionalParams} [options]
     * Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginBackendHealthWithHttpOperationResponse(resourceGroupName: string, applicationGatewayName: string, options?: Models.ApplicationGatewaysBeginBackendHealthOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists all application gateways in a resource group.
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
     * Gets all the application gateways in a subscription.
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
     * Lists all SSL predefined policies for configuring Ssl policy.
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
    listAvailableSslPredefinedPoliciesNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
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
    deleteMethod(resourceGroupName: string, applicationGatewayName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, applicationGatewayName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationGateway} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, applicationGatewayName: string): Promise<Models.ApplicationGateway>;
    get(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGateway>;
    get(resourceGroupName: string, applicationGatewayName: string, callback: msRest.ServiceCallback<Models.ApplicationGateway>): void;
    get(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGateway>): void;
    /**
     * Creates or updates the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {ApplicationGateway} parameters Parameters supplied to the create or
     * update application gateway operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationGateway} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, applicationGatewayName: string, parameters: Models.ApplicationGateway): Promise<Models.ApplicationGateway>;
    createOrUpdate(resourceGroupName: string, applicationGatewayName: string, parameters: Models.ApplicationGateway, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGateway>;
    createOrUpdate(resourceGroupName: string, applicationGatewayName: string, parameters: Models.ApplicationGateway, callback: msRest.ServiceCallback<Models.ApplicationGateway>): void;
    createOrUpdate(resourceGroupName: string, applicationGatewayName: string, parameters: Models.ApplicationGateway, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGateway>): void;
    /**
     * Lists all application gateways in a resource group.
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
     *                      {Models.ApplicationGatewayListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationGatewayListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.ApplicationGatewayListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewayListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
    /**
     * Gets all the application gateways in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationGatewayListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationGatewayListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAll(): Promise<Models.ApplicationGatewayListResult>;
    listAll(options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewayListResult>;
    listAll(callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
    listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
    /**
     * Starts the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
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
    start(resourceGroupName: string, applicationGatewayName: string): Promise<void>;
    start(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase): Promise<void>;
    start(resourceGroupName: string, applicationGatewayName: string, callback: msRest.ServiceCallback<void>): void;
    start(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Stops the specified application gateway in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
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
    stop(resourceGroupName: string, applicationGatewayName: string): Promise<void>;
    stop(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase): Promise<void>;
    stop(resourceGroupName: string, applicationGatewayName: string, callback: msRest.ServiceCallback<void>): void;
    stop(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the backend health of the specified application gateway in a resource
     * group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {ApplicationGatewaysBackendHealthOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationGatewayBackendHealth} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationGatewayBackendHealth} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    backendHealth(resourceGroupName: string, applicationGatewayName: string): Promise<Models.ApplicationGatewayBackendHealth>;
    backendHealth(resourceGroupName: string, applicationGatewayName: string, options: Models.ApplicationGatewaysBackendHealthOptionalParams): Promise<Models.ApplicationGatewayBackendHealth>;
    backendHealth(resourceGroupName: string, applicationGatewayName: string, callback: msRest.ServiceCallback<Models.ApplicationGatewayBackendHealth>): void;
    backendHealth(resourceGroupName: string, applicationGatewayName: string, options: Models.ApplicationGatewaysBackendHealthOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationGatewayBackendHealth>): void;
    /**
     * Lists all available web application firewall rule sets.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationGatewayAvailableWafRuleSetsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ApplicationGatewayAvailableWafRuleSetsResult}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAvailableWafRuleSets(): Promise<Models.ApplicationGatewayAvailableWafRuleSetsResult>;
    listAvailableWafRuleSets(options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewayAvailableWafRuleSetsResult>;
    listAvailableWafRuleSets(callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableWafRuleSetsResult>): void;
    listAvailableWafRuleSets(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableWafRuleSetsResult>): void;
    /**
     * Lists available Ssl options for configuring Ssl policy.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationGatewayAvailableSslOptions} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ApplicationGatewayAvailableSslOptions} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAvailableSslOptions(): Promise<Models.ApplicationGatewayAvailableSslOptions>;
    listAvailableSslOptions(options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewayAvailableSslOptions>;
    listAvailableSslOptions(callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslOptions>): void;
    listAvailableSslOptions(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslOptions>): void;
    /**
     * Lists all SSL predefined policies for configuring Ssl policy.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationGatewayAvailableSslPredefinedPolicies} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ApplicationGatewayAvailableSslPredefinedPolicies}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAvailableSslPredefinedPolicies(): Promise<Models.ApplicationGatewayAvailableSslPredefinedPolicies>;
    listAvailableSslPredefinedPolicies(options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewayAvailableSslPredefinedPolicies>;
    listAvailableSslPredefinedPolicies(callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslPredefinedPolicies>): void;
    listAvailableSslPredefinedPolicies(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslPredefinedPolicies>): void;
    /**
     * Gets Ssl predefined policy with the specified policy name.
     *
     * @param {string} predefinedPolicyName Name of Ssl predefined policy.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationGatewaySslPredefinedPolicy} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ApplicationGatewaySslPredefinedPolicy} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getSslPredefinedPolicy(predefinedPolicyName: string): Promise<Models.ApplicationGatewaySslPredefinedPolicy>;
    getSslPredefinedPolicy(predefinedPolicyName: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaySslPredefinedPolicy>;
    getSslPredefinedPolicy(predefinedPolicyName: string, callback: msRest.ServiceCallback<Models.ApplicationGatewaySslPredefinedPolicy>): void;
    getSslPredefinedPolicy(predefinedPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewaySslPredefinedPolicy>): void;
    /**
     * Deletes the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
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
    beginDeleteMethod(resourceGroupName: string, applicationGatewayName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, applicationGatewayName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {ApplicationGateway} parameters Parameters supplied to the create or
     * update application gateway operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationGateway} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, applicationGatewayName: string, parameters: Models.ApplicationGateway): Promise<Models.ApplicationGateway>;
    beginCreateOrUpdate(resourceGroupName: string, applicationGatewayName: string, parameters: Models.ApplicationGateway, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGateway>;
    beginCreateOrUpdate(resourceGroupName: string, applicationGatewayName: string, parameters: Models.ApplicationGateway, callback: msRest.ServiceCallback<Models.ApplicationGateway>): void;
    beginCreateOrUpdate(resourceGroupName: string, applicationGatewayName: string, parameters: Models.ApplicationGateway, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGateway>): void;
    /**
     * Starts the specified application gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
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
    beginStart(resourceGroupName: string, applicationGatewayName: string): Promise<void>;
    beginStart(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginStart(resourceGroupName: string, applicationGatewayName: string, callback: msRest.ServiceCallback<void>): void;
    beginStart(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Stops the specified application gateway in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
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
    beginStop(resourceGroupName: string, applicationGatewayName: string): Promise<void>;
    beginStop(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginStop(resourceGroupName: string, applicationGatewayName: string, callback: msRest.ServiceCallback<void>): void;
    beginStop(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the backend health of the specified application gateway in a resource
     * group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} applicationGatewayName The name of the application gateway.
     *
     * @param {ApplicationGatewaysBeginBackendHealthOptionalParams} [options]
     * Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationGatewayBackendHealth} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationGatewayBackendHealth} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginBackendHealth(resourceGroupName: string, applicationGatewayName: string): Promise<Models.ApplicationGatewayBackendHealth>;
    beginBackendHealth(resourceGroupName: string, applicationGatewayName: string, options: Models.ApplicationGatewaysBeginBackendHealthOptionalParams): Promise<Models.ApplicationGatewayBackendHealth>;
    beginBackendHealth(resourceGroupName: string, applicationGatewayName: string, callback: msRest.ServiceCallback<Models.ApplicationGatewayBackendHealth>): void;
    beginBackendHealth(resourceGroupName: string, applicationGatewayName: string, options: Models.ApplicationGatewaysBeginBackendHealthOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationGatewayBackendHealth>): void;
    /**
     * Lists all application gateways in a resource group.
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
     *                      {Models.ApplicationGatewayListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationGatewayListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ApplicationGatewayListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewayListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
    /**
     * Gets all the application gateways in a subscription.
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
     *                      {Models.ApplicationGatewayListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationGatewayListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAllNext(nextPageLink: string): Promise<Models.ApplicationGatewayListResult>;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewayListResult>;
    listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
    /**
     * Lists all SSL predefined policies for configuring Ssl policy.
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
     *                      {Models.ApplicationGatewayAvailableSslPredefinedPolicies} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ApplicationGatewayAvailableSslPredefinedPolicies}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAvailableSslPredefinedPoliciesNext(nextPageLink: string): Promise<Models.ApplicationGatewayAvailableSslPredefinedPolicies>;
    listAvailableSslPredefinedPoliciesNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewayAvailableSslPredefinedPolicies>;
    listAvailableSslPredefinedPoliciesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslPredefinedPolicies>): void;
    listAvailableSslPredefinedPoliciesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslPredefinedPolicies>): void;
}
