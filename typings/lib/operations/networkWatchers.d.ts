import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClient } from "../networkManagementClient";
/** Class representing a NetworkWatchers. */
export declare class NetworkWatchers {
    private readonly client;
    /**
     * Create a NetworkWatchers.
     * @param {NetworkManagementClient} client Reference to the service client.
     */
    constructor(client: NetworkManagementClient);
    /**
     * Creates or updates a network watcher in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {NetworkWatcher} parameters Parameters that define the network
     * watcher resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.NetworkWatcher, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified network watcher by resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified network watcher resource.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all network watchers by resource group.
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
     * Gets all network watchers by subscription.
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
     * Gets the current network topology by resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {TopologyParameters} parameters Parameters that define the
     * representation of topology.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getTopologyWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.TopologyParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Verify IP flow from the specified VM to a location given the currently
     * configured NSG rules.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {VerificationIPFlowParameters} parameters Parameters that define the
     * IP flow to be verified.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    verifyIPFlowWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.VerificationIPFlowParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the next hop from the specified VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {NextHopParameters} parameters Parameters that define the source and
     * destination endpoint.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getNextHopWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.NextHopParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the configured and effective security group rules on the specified VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {SecurityGroupViewParameters} parameters Parameters that define the
     * VM to check security groups for.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getVMSecurityRulesWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.SecurityGroupViewParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Initiate troubleshooting on a specified resource
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {TroubleshootingParameters} parameters Parameters that define the
     * resource to troubleshoot.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getTroubleshootingWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.TroubleshootingParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Get the last completed troubleshooting result on a specified resource
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {QueryTroubleshootingParameters} parameters Parameters that define
     * the resource to query the troubleshooting result.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getTroubleshootingResultWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.QueryTroubleshootingParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Configures flow log on a specified resource.
     *
     * @param {string} resourceGroupName The name of the network watcher resource
     * group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {FlowLogInformation} parameters Parameters that define the
     * configuration of flow log.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    setFlowLogConfigurationWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogInformation, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Queries status of flow log on a specified resource.
     *
     * @param {string} resourceGroupName The name of the network watcher resource
     * group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {FlowLogStatusParameters} parameters Parameters that define a
     * resource to query flow log status.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getFlowLogStatusWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogStatusParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Verifies the possibility of establishing a direct TCP connection from a
     * virtual machine to a given endpoint including another VM or an arbitrary
     * remote server.
     *
     * @param {string} resourceGroupName The name of the network watcher resource
     * group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {ConnectivityParameters} parameters Parameters that determine how the
     * connectivity check will be performed.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    checkConnectivityWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.ConnectivityParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified network watcher resource.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Verify IP flow from the specified VM to a location given the currently
     * configured NSG rules.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {VerificationIPFlowParameters} parameters Parameters that define the
     * IP flow to be verified.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginVerifyIPFlowWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.VerificationIPFlowParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the next hop from the specified VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {NextHopParameters} parameters Parameters that define the source and
     * destination endpoint.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginGetNextHopWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.NextHopParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the configured and effective security group rules on the specified VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {SecurityGroupViewParameters} parameters Parameters that define the
     * VM to check security groups for.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginGetVMSecurityRulesWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.SecurityGroupViewParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Initiate troubleshooting on a specified resource
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {TroubleshootingParameters} parameters Parameters that define the
     * resource to troubleshoot.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginGetTroubleshootingWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.TroubleshootingParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Get the last completed troubleshooting result on a specified resource
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {QueryTroubleshootingParameters} parameters Parameters that define
     * the resource to query the troubleshooting result.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginGetTroubleshootingResultWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.QueryTroubleshootingParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Configures flow log on a specified resource.
     *
     * @param {string} resourceGroupName The name of the network watcher resource
     * group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {FlowLogInformation} parameters Parameters that define the
     * configuration of flow log.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginSetFlowLogConfigurationWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogInformation, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Queries status of flow log on a specified resource.
     *
     * @param {string} resourceGroupName The name of the network watcher resource
     * group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {FlowLogStatusParameters} parameters Parameters that define a
     * resource to query flow log status.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginGetFlowLogStatusWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogStatusParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Verifies the possibility of establishing a direct TCP connection from a
     * virtual machine to a given endpoint including another VM or an arbitrary
     * remote server.
     *
     * @param {string} resourceGroupName The name of the network watcher resource
     * group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {ConnectivityParameters} parameters Parameters that determine how the
     * connectivity check will be performed.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCheckConnectivityWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, parameters: Models.ConnectivityParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates a network watcher in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {NetworkWatcher} parameters Parameters that define the network
     * watcher resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NetworkWatcher} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkWatcher} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, networkWatcherName: string, parameters: Models.NetworkWatcher): Promise<Models.NetworkWatcher>;
    createOrUpdate(resourceGroupName: string, networkWatcherName: string, parameters: Models.NetworkWatcher, options: msRest.RequestOptionsBase): Promise<Models.NetworkWatcher>;
    createOrUpdate(resourceGroupName: string, networkWatcherName: string, parameters: Models.NetworkWatcher, callback: msRest.ServiceCallback<Models.NetworkWatcher>): void;
    createOrUpdate(resourceGroupName: string, networkWatcherName: string, parameters: Models.NetworkWatcher, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkWatcher>): void;
    /**
     * Gets the specified network watcher by resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NetworkWatcher} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkWatcher} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, networkWatcherName: string): Promise<Models.NetworkWatcher>;
    get(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkWatcher>;
    get(resourceGroupName: string, networkWatcherName: string, callback: msRest.ServiceCallback<Models.NetworkWatcher>): void;
    get(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkWatcher>): void;
    /**
     * Deletes the specified network watcher resource.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
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
    deleteMethod(resourceGroupName: string, networkWatcherName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, networkWatcherName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets all network watchers by resource group.
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
     *                      {Models.NetworkWatcherListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkWatcherListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.NetworkWatcherListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkWatcherListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.NetworkWatcherListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkWatcherListResult>): void;
    /**
     * Gets all network watchers by subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NetworkWatcherListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkWatcherListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAll(): Promise<Models.NetworkWatcherListResult>;
    listAll(options: msRest.RequestOptionsBase): Promise<Models.NetworkWatcherListResult>;
    listAll(callback: msRest.ServiceCallback<Models.NetworkWatcherListResult>): void;
    listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkWatcherListResult>): void;
    /**
     * Gets the current network topology by resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {TopologyParameters} parameters Parameters that define the
     * representation of topology.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.Topology} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Topology} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getTopology(resourceGroupName: string, networkWatcherName: string, parameters: Models.TopologyParameters): Promise<Models.Topology>;
    getTopology(resourceGroupName: string, networkWatcherName: string, parameters: Models.TopologyParameters, options: msRest.RequestOptionsBase): Promise<Models.Topology>;
    getTopology(resourceGroupName: string, networkWatcherName: string, parameters: Models.TopologyParameters, callback: msRest.ServiceCallback<Models.Topology>): void;
    getTopology(resourceGroupName: string, networkWatcherName: string, parameters: Models.TopologyParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Topology>): void;
    /**
     * Verify IP flow from the specified VM to a location given the currently
     * configured NSG rules.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {VerificationIPFlowParameters} parameters Parameters that define the
     * IP flow to be verified.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.VerificationIPFlowResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VerificationIPFlowResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    verifyIPFlow(resourceGroupName: string, networkWatcherName: string, parameters: Models.VerificationIPFlowParameters): Promise<Models.VerificationIPFlowResult>;
    verifyIPFlow(resourceGroupName: string, networkWatcherName: string, parameters: Models.VerificationIPFlowParameters, options: msRest.RequestOptionsBase): Promise<Models.VerificationIPFlowResult>;
    verifyIPFlow(resourceGroupName: string, networkWatcherName: string, parameters: Models.VerificationIPFlowParameters, callback: msRest.ServiceCallback<Models.VerificationIPFlowResult>): void;
    verifyIPFlow(resourceGroupName: string, networkWatcherName: string, parameters: Models.VerificationIPFlowParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VerificationIPFlowResult>): void;
    /**
     * Gets the next hop from the specified VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {NextHopParameters} parameters Parameters that define the source and
     * destination endpoint.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NextHopResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NextHopResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getNextHop(resourceGroupName: string, networkWatcherName: string, parameters: Models.NextHopParameters): Promise<Models.NextHopResult>;
    getNextHop(resourceGroupName: string, networkWatcherName: string, parameters: Models.NextHopParameters, options: msRest.RequestOptionsBase): Promise<Models.NextHopResult>;
    getNextHop(resourceGroupName: string, networkWatcherName: string, parameters: Models.NextHopParameters, callback: msRest.ServiceCallback<Models.NextHopResult>): void;
    getNextHop(resourceGroupName: string, networkWatcherName: string, parameters: Models.NextHopParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NextHopResult>): void;
    /**
     * Gets the configured and effective security group rules on the specified VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {SecurityGroupViewParameters} parameters Parameters that define the
     * VM to check security groups for.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.SecurityGroupViewResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SecurityGroupViewResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getVMSecurityRules(resourceGroupName: string, networkWatcherName: string, parameters: Models.SecurityGroupViewParameters): Promise<Models.SecurityGroupViewResult>;
    getVMSecurityRules(resourceGroupName: string, networkWatcherName: string, parameters: Models.SecurityGroupViewParameters, options: msRest.RequestOptionsBase): Promise<Models.SecurityGroupViewResult>;
    getVMSecurityRules(resourceGroupName: string, networkWatcherName: string, parameters: Models.SecurityGroupViewParameters, callback: msRest.ServiceCallback<Models.SecurityGroupViewResult>): void;
    getVMSecurityRules(resourceGroupName: string, networkWatcherName: string, parameters: Models.SecurityGroupViewParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityGroupViewResult>): void;
    /**
     * Initiate troubleshooting on a specified resource
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {TroubleshootingParameters} parameters Parameters that define the
     * resource to troubleshoot.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.TroubleshootingResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.TroubleshootingResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getTroubleshooting(resourceGroupName: string, networkWatcherName: string, parameters: Models.TroubleshootingParameters): Promise<Models.TroubleshootingResult>;
    getTroubleshooting(resourceGroupName: string, networkWatcherName: string, parameters: Models.TroubleshootingParameters, options: msRest.RequestOptionsBase): Promise<Models.TroubleshootingResult>;
    getTroubleshooting(resourceGroupName: string, networkWatcherName: string, parameters: Models.TroubleshootingParameters, callback: msRest.ServiceCallback<Models.TroubleshootingResult>): void;
    getTroubleshooting(resourceGroupName: string, networkWatcherName: string, parameters: Models.TroubleshootingParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TroubleshootingResult>): void;
    /**
     * Get the last completed troubleshooting result on a specified resource
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {QueryTroubleshootingParameters} parameters Parameters that define
     * the resource to query the troubleshooting result.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.TroubleshootingResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.TroubleshootingResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getTroubleshootingResult(resourceGroupName: string, networkWatcherName: string, parameters: Models.QueryTroubleshootingParameters): Promise<Models.TroubleshootingResult>;
    getTroubleshootingResult(resourceGroupName: string, networkWatcherName: string, parameters: Models.QueryTroubleshootingParameters, options: msRest.RequestOptionsBase): Promise<Models.TroubleshootingResult>;
    getTroubleshootingResult(resourceGroupName: string, networkWatcherName: string, parameters: Models.QueryTroubleshootingParameters, callback: msRest.ServiceCallback<Models.TroubleshootingResult>): void;
    getTroubleshootingResult(resourceGroupName: string, networkWatcherName: string, parameters: Models.QueryTroubleshootingParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TroubleshootingResult>): void;
    /**
     * Configures flow log on a specified resource.
     *
     * @param {string} resourceGroupName The name of the network watcher resource
     * group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {FlowLogInformation} parameters Parameters that define the
     * configuration of flow log.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.FlowLogInformation} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.FlowLogInformation} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    setFlowLogConfiguration(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogInformation): Promise<Models.FlowLogInformation>;
    setFlowLogConfiguration(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogInformation, options: msRest.RequestOptionsBase): Promise<Models.FlowLogInformation>;
    setFlowLogConfiguration(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogInformation, callback: msRest.ServiceCallback<Models.FlowLogInformation>): void;
    setFlowLogConfiguration(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogInformation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FlowLogInformation>): void;
    /**
     * Queries status of flow log on a specified resource.
     *
     * @param {string} resourceGroupName The name of the network watcher resource
     * group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {FlowLogStatusParameters} parameters Parameters that define a
     * resource to query flow log status.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.FlowLogInformation} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.FlowLogInformation} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getFlowLogStatus(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogStatusParameters): Promise<Models.FlowLogInformation>;
    getFlowLogStatus(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogStatusParameters, options: msRest.RequestOptionsBase): Promise<Models.FlowLogInformation>;
    getFlowLogStatus(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogStatusParameters, callback: msRest.ServiceCallback<Models.FlowLogInformation>): void;
    getFlowLogStatus(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogStatusParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FlowLogInformation>): void;
    /**
     * Verifies the possibility of establishing a direct TCP connection from a
     * virtual machine to a given endpoint including another VM or an arbitrary
     * remote server.
     *
     * @param {string} resourceGroupName The name of the network watcher resource
     * group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {ConnectivityParameters} parameters Parameters that determine how the
     * connectivity check will be performed.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ConnectivityInformation} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectivityInformation} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    checkConnectivity(resourceGroupName: string, networkWatcherName: string, parameters: Models.ConnectivityParameters): Promise<Models.ConnectivityInformation>;
    checkConnectivity(resourceGroupName: string, networkWatcherName: string, parameters: Models.ConnectivityParameters, options: msRest.RequestOptionsBase): Promise<Models.ConnectivityInformation>;
    checkConnectivity(resourceGroupName: string, networkWatcherName: string, parameters: Models.ConnectivityParameters, callback: msRest.ServiceCallback<Models.ConnectivityInformation>): void;
    checkConnectivity(resourceGroupName: string, networkWatcherName: string, parameters: Models.ConnectivityParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectivityInformation>): void;
    /**
     * Deletes the specified network watcher resource.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
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
    beginDeleteMethod(resourceGroupName: string, networkWatcherName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Verify IP flow from the specified VM to a location given the currently
     * configured NSG rules.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {VerificationIPFlowParameters} parameters Parameters that define the
     * IP flow to be verified.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.VerificationIPFlowResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VerificationIPFlowResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginVerifyIPFlow(resourceGroupName: string, networkWatcherName: string, parameters: Models.VerificationIPFlowParameters): Promise<Models.VerificationIPFlowResult>;
    beginVerifyIPFlow(resourceGroupName: string, networkWatcherName: string, parameters: Models.VerificationIPFlowParameters, options: msRest.RequestOptionsBase): Promise<Models.VerificationIPFlowResult>;
    beginVerifyIPFlow(resourceGroupName: string, networkWatcherName: string, parameters: Models.VerificationIPFlowParameters, callback: msRest.ServiceCallback<Models.VerificationIPFlowResult>): void;
    beginVerifyIPFlow(resourceGroupName: string, networkWatcherName: string, parameters: Models.VerificationIPFlowParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VerificationIPFlowResult>): void;
    /**
     * Gets the next hop from the specified VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {NextHopParameters} parameters Parameters that define the source and
     * destination endpoint.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NextHopResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NextHopResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGetNextHop(resourceGroupName: string, networkWatcherName: string, parameters: Models.NextHopParameters): Promise<Models.NextHopResult>;
    beginGetNextHop(resourceGroupName: string, networkWatcherName: string, parameters: Models.NextHopParameters, options: msRest.RequestOptionsBase): Promise<Models.NextHopResult>;
    beginGetNextHop(resourceGroupName: string, networkWatcherName: string, parameters: Models.NextHopParameters, callback: msRest.ServiceCallback<Models.NextHopResult>): void;
    beginGetNextHop(resourceGroupName: string, networkWatcherName: string, parameters: Models.NextHopParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NextHopResult>): void;
    /**
     * Gets the configured and effective security group rules on the specified VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {SecurityGroupViewParameters} parameters Parameters that define the
     * VM to check security groups for.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.SecurityGroupViewResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SecurityGroupViewResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGetVMSecurityRules(resourceGroupName: string, networkWatcherName: string, parameters: Models.SecurityGroupViewParameters): Promise<Models.SecurityGroupViewResult>;
    beginGetVMSecurityRules(resourceGroupName: string, networkWatcherName: string, parameters: Models.SecurityGroupViewParameters, options: msRest.RequestOptionsBase): Promise<Models.SecurityGroupViewResult>;
    beginGetVMSecurityRules(resourceGroupName: string, networkWatcherName: string, parameters: Models.SecurityGroupViewParameters, callback: msRest.ServiceCallback<Models.SecurityGroupViewResult>): void;
    beginGetVMSecurityRules(resourceGroupName: string, networkWatcherName: string, parameters: Models.SecurityGroupViewParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityGroupViewResult>): void;
    /**
     * Initiate troubleshooting on a specified resource
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {TroubleshootingParameters} parameters Parameters that define the
     * resource to troubleshoot.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.TroubleshootingResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.TroubleshootingResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGetTroubleshooting(resourceGroupName: string, networkWatcherName: string, parameters: Models.TroubleshootingParameters): Promise<Models.TroubleshootingResult>;
    beginGetTroubleshooting(resourceGroupName: string, networkWatcherName: string, parameters: Models.TroubleshootingParameters, options: msRest.RequestOptionsBase): Promise<Models.TroubleshootingResult>;
    beginGetTroubleshooting(resourceGroupName: string, networkWatcherName: string, parameters: Models.TroubleshootingParameters, callback: msRest.ServiceCallback<Models.TroubleshootingResult>): void;
    beginGetTroubleshooting(resourceGroupName: string, networkWatcherName: string, parameters: Models.TroubleshootingParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TroubleshootingResult>): void;
    /**
     * Get the last completed troubleshooting result on a specified resource
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {QueryTroubleshootingParameters} parameters Parameters that define
     * the resource to query the troubleshooting result.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.TroubleshootingResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.TroubleshootingResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGetTroubleshootingResult(resourceGroupName: string, networkWatcherName: string, parameters: Models.QueryTroubleshootingParameters): Promise<Models.TroubleshootingResult>;
    beginGetTroubleshootingResult(resourceGroupName: string, networkWatcherName: string, parameters: Models.QueryTroubleshootingParameters, options: msRest.RequestOptionsBase): Promise<Models.TroubleshootingResult>;
    beginGetTroubleshootingResult(resourceGroupName: string, networkWatcherName: string, parameters: Models.QueryTroubleshootingParameters, callback: msRest.ServiceCallback<Models.TroubleshootingResult>): void;
    beginGetTroubleshootingResult(resourceGroupName: string, networkWatcherName: string, parameters: Models.QueryTroubleshootingParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TroubleshootingResult>): void;
    /**
     * Configures flow log on a specified resource.
     *
     * @param {string} resourceGroupName The name of the network watcher resource
     * group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {FlowLogInformation} parameters Parameters that define the
     * configuration of flow log.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.FlowLogInformation} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.FlowLogInformation} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginSetFlowLogConfiguration(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogInformation): Promise<Models.FlowLogInformation>;
    beginSetFlowLogConfiguration(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogInformation, options: msRest.RequestOptionsBase): Promise<Models.FlowLogInformation>;
    beginSetFlowLogConfiguration(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogInformation, callback: msRest.ServiceCallback<Models.FlowLogInformation>): void;
    beginSetFlowLogConfiguration(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogInformation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FlowLogInformation>): void;
    /**
     * Queries status of flow log on a specified resource.
     *
     * @param {string} resourceGroupName The name of the network watcher resource
     * group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {FlowLogStatusParameters} parameters Parameters that define a
     * resource to query flow log status.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.FlowLogInformation} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.FlowLogInformation} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGetFlowLogStatus(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogStatusParameters): Promise<Models.FlowLogInformation>;
    beginGetFlowLogStatus(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogStatusParameters, options: msRest.RequestOptionsBase): Promise<Models.FlowLogInformation>;
    beginGetFlowLogStatus(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogStatusParameters, callback: msRest.ServiceCallback<Models.FlowLogInformation>): void;
    beginGetFlowLogStatus(resourceGroupName: string, networkWatcherName: string, parameters: Models.FlowLogStatusParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FlowLogInformation>): void;
    /**
     * Verifies the possibility of establishing a direct TCP connection from a
     * virtual machine to a given endpoint including another VM or an arbitrary
     * remote server.
     *
     * @param {string} resourceGroupName The name of the network watcher resource
     * group.
     *
     * @param {string} networkWatcherName The name of the network watcher resource.
     *
     * @param {ConnectivityParameters} parameters Parameters that determine how the
     * connectivity check will be performed.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ConnectivityInformation} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectivityInformation} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCheckConnectivity(resourceGroupName: string, networkWatcherName: string, parameters: Models.ConnectivityParameters): Promise<Models.ConnectivityInformation>;
    beginCheckConnectivity(resourceGroupName: string, networkWatcherName: string, parameters: Models.ConnectivityParameters, options: msRest.RequestOptionsBase): Promise<Models.ConnectivityInformation>;
    beginCheckConnectivity(resourceGroupName: string, networkWatcherName: string, parameters: Models.ConnectivityParameters, callback: msRest.ServiceCallback<Models.ConnectivityInformation>): void;
    beginCheckConnectivity(resourceGroupName: string, networkWatcherName: string, parameters: Models.ConnectivityParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectivityInformation>): void;
}
