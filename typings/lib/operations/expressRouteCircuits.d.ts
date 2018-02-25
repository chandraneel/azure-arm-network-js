import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClient } from "../networkManagementClient";
/** Class representing a ExpressRouteCircuits. */
export declare class ExpressRouteCircuits {
    private readonly client;
    /**
     * Create a ExpressRouteCircuits.
     * @param {NetworkManagementClient} client Reference to the service client.
     */
    constructor(client: NetworkManagementClient);
    /**
     * Deletes the specified express route circuit.
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
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of express route circuit.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates an express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the circuit.
     *
     * @param {ExpressRouteCircuit} parameters Parameters supplied to the create or
     * update express route circuit operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, circuitName: string, parameters: Models.ExpressRouteCircuit, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the currently advertised ARP table associated with the express route
     * circuit in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {string} devicePath The path of the device.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listArpTableWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the currently advertised routes table associated with the express route
     * circuit in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {string} devicePath The path of the device.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listRoutesTableWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the currently advertised routes table summary associated with the
     * express route circuit in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {string} devicePath The path of the device.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listRoutesTableSummaryWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all the stats from an express route circuit in a resource group.
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
    getStatsWithHttpOperationResponse(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all stats from an express route circuit in a resource group.
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
    getPeeringStatsWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all the express route circuits in a resource group.
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
     * Gets all the express route circuits in a subscription.
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
     * Deletes the specified express route circuit.
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
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates an express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the circuit.
     *
     * @param {ExpressRouteCircuit} parameters Parameters supplied to the create or
     * update express route circuit operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, circuitName: string, parameters: Models.ExpressRouteCircuit, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the currently advertised ARP table associated with the express route
     * circuit in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {string} devicePath The path of the device.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginListArpTableWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the currently advertised routes table associated with the express route
     * circuit in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {string} devicePath The path of the device.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginListRoutesTableWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the currently advertised routes table summary associated with the
     * express route circuit in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {string} devicePath The path of the device.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginListRoutesTableSummaryWithHttpOperationResponse(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all the express route circuits in a resource group.
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
     * Gets all the express route circuits in a subscription.
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
     * Deletes the specified express route circuit.
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
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, circuitName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, circuitName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the specified express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of express route circuit.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuit} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuit} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, circuitName: string): Promise<Models.ExpressRouteCircuit>;
    get(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuit>;
    get(resourceGroupName: string, circuitName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuit>): void;
    get(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuit>): void;
    /**
     * Creates or updates an express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the circuit.
     *
     * @param {ExpressRouteCircuit} parameters Parameters supplied to the create or
     * update express route circuit operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuit} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuit} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, circuitName: string, parameters: Models.ExpressRouteCircuit): Promise<Models.ExpressRouteCircuit>;
    createOrUpdate(resourceGroupName: string, circuitName: string, parameters: Models.ExpressRouteCircuit, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuit>;
    createOrUpdate(resourceGroupName: string, circuitName: string, parameters: Models.ExpressRouteCircuit, callback: msRest.ServiceCallback<Models.ExpressRouteCircuit>): void;
    createOrUpdate(resourceGroupName: string, circuitName: string, parameters: Models.ExpressRouteCircuit, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuit>): void;
    /**
     * Gets the currently advertised ARP table associated with the express route
     * circuit in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {string} devicePath The path of the device.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitsArpTableListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ExpressRouteCircuitsArpTableListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listArpTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string): Promise<Models.ExpressRouteCircuitsArpTableListResult>;
    listArpTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsArpTableListResult>;
    listArpTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitsArpTableListResult>): void;
    listArpTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitsArpTableListResult>): void;
    /**
     * Gets the currently advertised routes table associated with the express route
     * circuit in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {string} devicePath The path of the device.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitsRoutesTableListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ExpressRouteCircuitsRoutesTableListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listRoutesTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string): Promise<Models.ExpressRouteCircuitsRoutesTableListResult>;
    listRoutesTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsRoutesTableListResult>;
    listRoutesTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitsRoutesTableListResult>): void;
    listRoutesTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitsRoutesTableListResult>): void;
    /**
     * Gets the currently advertised routes table summary associated with the
     * express route circuit in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {string} devicePath The path of the device.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitsRoutesTableSummaryListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ExpressRouteCircuitsRoutesTableSummaryListResult}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listRoutesTableSummary(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string): Promise<Models.ExpressRouteCircuitsRoutesTableSummaryListResult>;
    listRoutesTableSummary(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsRoutesTableSummaryListResult>;
    listRoutesTableSummary(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitsRoutesTableSummaryListResult>): void;
    listRoutesTableSummary(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitsRoutesTableSummaryListResult>): void;
    /**
     * Gets all the stats from an express route circuit in a resource group.
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
     *                      {Models.ExpressRouteCircuitStats} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitStats} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getStats(resourceGroupName: string, circuitName: string): Promise<Models.ExpressRouteCircuitStats>;
    getStats(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitStats>;
    getStats(resourceGroupName: string, circuitName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitStats>): void;
    getStats(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitStats>): void;
    /**
     * Gets all stats from an express route circuit in a resource group.
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
     *                      {Models.ExpressRouteCircuitStats} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitStats} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getPeeringStats(resourceGroupName: string, circuitName: string, peeringName: string): Promise<Models.ExpressRouteCircuitStats>;
    getPeeringStats(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitStats>;
    getPeeringStats(resourceGroupName: string, circuitName: string, peeringName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitStats>): void;
    getPeeringStats(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitStats>): void;
    /**
     * Gets all the express route circuits in a resource group.
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
     *                      {Models.ExpressRouteCircuitListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.ExpressRouteCircuitListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
    /**
     * Gets all the express route circuits in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAll(): Promise<Models.ExpressRouteCircuitListResult>;
    listAll(options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitListResult>;
    listAll(callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
    listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
    /**
     * Deletes the specified express route circuit.
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
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginDeleteMethod(resourceGroupName: string, circuitName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, circuitName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates an express route circuit.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the circuit.
     *
     * @param {ExpressRouteCircuit} parameters Parameters supplied to the create or
     * update express route circuit operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuit} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuit} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, parameters: Models.ExpressRouteCircuit): Promise<Models.ExpressRouteCircuit>;
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, parameters: Models.ExpressRouteCircuit, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuit>;
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, parameters: Models.ExpressRouteCircuit, callback: msRest.ServiceCallback<Models.ExpressRouteCircuit>): void;
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, parameters: Models.ExpressRouteCircuit, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuit>): void;
    /**
     * Gets the currently advertised ARP table associated with the express route
     * circuit in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {string} devicePath The path of the device.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitsArpTableListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ExpressRouteCircuitsArpTableListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginListArpTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string): Promise<Models.ExpressRouteCircuitsArpTableListResult>;
    beginListArpTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsArpTableListResult>;
    beginListArpTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitsArpTableListResult>): void;
    beginListArpTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitsArpTableListResult>): void;
    /**
     * Gets the currently advertised routes table associated with the express route
     * circuit in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {string} devicePath The path of the device.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitsRoutesTableListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ExpressRouteCircuitsRoutesTableListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginListRoutesTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string): Promise<Models.ExpressRouteCircuitsRoutesTableListResult>;
    beginListRoutesTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsRoutesTableListResult>;
    beginListRoutesTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitsRoutesTableListResult>): void;
    beginListRoutesTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitsRoutesTableListResult>): void;
    /**
     * Gets the currently advertised routes table summary associated with the
     * express route circuit in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} circuitName The name of the express route circuit.
     *
     * @param {string} peeringName The name of the peering.
     *
     * @param {string} devicePath The path of the device.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ExpressRouteCircuitsRoutesTableSummaryListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ExpressRouteCircuitsRoutesTableSummaryListResult}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginListRoutesTableSummary(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string): Promise<Models.ExpressRouteCircuitsRoutesTableSummaryListResult>;
    beginListRoutesTableSummary(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsRoutesTableSummaryListResult>;
    beginListRoutesTableSummary(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitsRoutesTableSummaryListResult>): void;
    beginListRoutesTableSummary(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitsRoutesTableSummaryListResult>): void;
    /**
     * Gets all the express route circuits in a resource group.
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
     *                      {Models.ExpressRouteCircuitListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ExpressRouteCircuitListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
    /**
     * Gets all the express route circuits in a subscription.
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
     *                      {Models.ExpressRouteCircuitListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ExpressRouteCircuitListResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listAllNext(nextPageLink: string): Promise<Models.ExpressRouteCircuitListResult>;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitListResult>;
    listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
}
