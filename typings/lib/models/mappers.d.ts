export declare const CloudError: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            target: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            details: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const BaseResource: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {};
    };
};
export declare const SubResource: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const BackendAddressPool: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            backendIPConfigurations: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            loadBalancingRules: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            outboundNatRule: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const InboundNatRule: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendIPConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            backendIPConfiguration: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            backendPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            idleTimeoutInMinutes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableFloatingIP: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const Resource: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ApplicationSecurityGroup: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            resourceGuid: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SecurityRule: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            description: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourcePortRange: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            destinationPortRange: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceAddressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceAddressPrefixes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            sourceApplicationSecurityGroups: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            destinationAddressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            destinationAddressPrefixes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            destinationApplicationSecurityGroups: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            sourcePortRanges: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            destinationPortRanges: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            access: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            priority: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            direction: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkInterfaceDnsSettings: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            dnsServers: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            appliedDnsServers: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            internalDnsNameLabel: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            internalFqdn: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            internalDomainNameSuffix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkInterface: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            virtualMachine: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            networkSecurityGroup: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            ipConfigurations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            dnsSettings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            macAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            primary: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableAcceleratedNetworking: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableIPForwarding: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceGuid: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkSecurityGroup: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            securityRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            defaultSecurityRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            networkInterfaces: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            subnets: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            resourceGuid: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const Route: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            addressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nextHopType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nextHopIpAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RouteTable: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            routes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            subnets: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ServiceEndpointPropertiesFormat: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            service: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            locations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PublicIPAddressSku: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PublicIPAddressDnsSettings: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            domainNameLabel: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            fqdn: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            reverseFqdn: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PublicIPAddress: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            sku: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            publicIPAllocationMethod: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            publicIPAddressVersion: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipConfiguration: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dnsSettings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            ipAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            idleTimeoutInMinutes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceGuid: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            zones: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const IPConfiguration: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            privateIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            privateIPAllocationMethod: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            subnet: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            publicIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceNavigationLink: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            linkedResourceType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            link: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const Subnet: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            addressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            networkSecurityGroup: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            routeTable: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            serviceEndpoints: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            ipConfigurations: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            resourceNavigationLinks: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkInterfaceIPConfiguration: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            applicationGatewayBackendAddressPools: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            loadBalancerBackendAddressPools: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            loadBalancerInboundNatRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            privateIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            privateIPAllocationMethod: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            privateIPAddressVersion: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            subnet: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            primary: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            publicIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            applicationSecurityGroups: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayBackendAddress: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            fqdn: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayBackendAddressPool: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            backendIPConfigurations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            backendAddresses: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayConnectionDraining: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            enabled: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            drainTimeoutInSec: {
                required: boolean;
                serializedName: string;
                constraints: {
                    InclusiveMaximum: number;
                    InclusiveMinimum: number;
                };
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayBackendHttpSettings: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            port: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            cookieBasedAffinity: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestTimeout: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            probe: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            authenticationCertificates: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            connectionDraining: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            hostName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            pickHostNameFromBackendAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            affinityCookieName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            probeEnabled: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            path: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayBackendHealthServer: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            address: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            health: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayBackendHealthHttpSettings: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            backendHttpSettings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            servers: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ApplicationGatewayBackendHealthPool: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            backendAddressPool: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            backendHttpSettingsCollection: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ApplicationGatewayBackendHealth: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            backendAddressPools: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ApplicationGatewaySku: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tier: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            capacity: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewaySslPolicy: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            disabledSslProtocols: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            policyType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            policyName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            cipherSuites: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            minProtocolVersion: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayIPConfiguration: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            subnet: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayAuthenticationCertificate: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            data: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewaySslCertificate: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            data: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            password: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            publicCertData: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayFrontendIPConfiguration: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            privateIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            privateIPAllocationMethod: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            subnet: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            publicIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayFrontendPort: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            port: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayHttpListener: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendIPConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            frontendPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            hostName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sslCertificate: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            requireServerNameIndication: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayPathRule: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            paths: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            backendAddressPool: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            backendHttpSettings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            redirectConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayProbeHealthResponseMatch: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            body: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            statusCodes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ApplicationGatewayProbe: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            host: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            path: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            interval: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            unhealthyThreshold: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            pickHostNameFromBackendHttpSettings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            minServers: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            match: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayRequestRoutingRule: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ruleType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            backendAddressPool: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            backendHttpSettings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            httpListener: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            urlPathMap: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            redirectConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayRedirectConfiguration: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            redirectType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetListener: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            targetUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            includePath: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            includeQueryString: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestRoutingRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            urlPathMaps: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            pathRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayUrlPathMap: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            defaultBackendAddressPool: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            defaultBackendHttpSettings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            defaultRedirectConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            pathRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayFirewallDisabledRuleGroup: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ruleGroupName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            rules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ApplicationGatewayWebApplicationFirewallConfiguration: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            enabled: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            firewallMode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ruleSetType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ruleSetVersion: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            disabledRuleGroups: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ApplicationGateway: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            sku: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            sslPolicy: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            operationalState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            gatewayIPConfigurations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            authenticationCertificates: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            sslCertificates: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            frontendIPConfigurations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            frontendPorts: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            probes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            backendAddressPools: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            backendHttpSettingsCollection: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            httpListeners: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            urlPathMaps: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            requestRoutingRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            redirectConfigurations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            webApplicationFirewallConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceGuid: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayFirewallRule: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ruleId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            description: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayFirewallRuleGroup: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ruleGroupName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            description: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            rules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ApplicationGatewayFirewallRuleSet: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ruleSetType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ruleSetVersion: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ruleGroups: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ApplicationGatewayAvailableWafRuleSetsResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ApplicationGatewayAvailableSslOptions: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            predefinedPolicies: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            defaultPolicy: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            availableCipherSuites: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            availableProtocols: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ApplicationGatewaySslPredefinedPolicy: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            cipherSuites: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            minProtocolVersion: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const DnsNameAvailabilityResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            available: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const EndpointServiceResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitAuthorization: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            authorizationKey: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            authorizationUseStatus: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitPeeringConfig: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            advertisedPublicPrefixes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            advertisedCommunities: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            advertisedPublicPrefixesState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            legacyMode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            customerASN: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routingRegistryName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RouteFilterRule: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            access: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routeFilterRuleType: {
                required: boolean;
                isConstant: boolean;
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
            communities: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitStats: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            primarybytesIn: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            primarybytesOut: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            secondarybytesIn: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            secondarybytesOut: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitPeering: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            peeringType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            azureASN: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            peerASN: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            primaryPeerAddressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            secondaryPeerAddressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            primaryAzurePort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            secondaryAzurePort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sharedKey: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vlanId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            microsoftPeeringConfig: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            stats: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            gatewayManagerEtag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModifiedBy: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routeFilter: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            ipv6PeeringConfig: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RouteFilter: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            rules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            peerings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const Ipv6ExpressRouteCircuitPeeringConfig: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            primaryPeerAddressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            secondaryPeerAddressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            microsoftPeeringConfig: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            routeFilter: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            state: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitSku: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tier: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            family: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitServiceProviderProperties: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            serviceProviderName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            peeringLocation: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            bandwidthInMbps: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuit: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            sku: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            allowClassicOperations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            circuitProvisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            serviceProviderProvisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            authorizations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            peerings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            serviceKey: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            serviceProviderNotes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            serviceProviderProperties: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            gatewayManagerEtag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitArpTable: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            age: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            interfaceProperty: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            macAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitsArpTableListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitRoutesTable: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            network: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nextHop: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            locPrf: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            weight: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            path: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitsRoutesTableListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitRoutesTableSummary: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            neighbor: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            v: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            as: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            upDown: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            statePfxRcd: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitsRoutesTableSummaryListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteServiceProviderBandwidthsOffered: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            offerName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            valueInMbps: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteServiceProvider: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            peeringLocations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            bandwidthsOffered: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LoadBalancerSku: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FrontendIPConfiguration: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            inboundNatRules: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            inboundNatPools: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            outboundNatRules: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            loadBalancingRules: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            privateIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            privateIPAllocationMethod: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            subnet: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            publicIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            zones: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const LoadBalancingRule: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendIPConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            backendAddressPool: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            probe: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            loadDistribution: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            backendPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            idleTimeoutInMinutes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableFloatingIP: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            disableOutboundSnat: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const Probe: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            loadBalancingRules: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            port: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            intervalInSeconds: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            numberOfProbes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestPath: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const InboundNatPool: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendIPConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendPortRangeStart: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendPortRangeEnd: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            backendPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OutboundNatRule: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            allocatedOutboundPorts: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendIPConfigurations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            backendAddressPool: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LoadBalancer: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            sku: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            frontendIPConfigurations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            backendAddressPools: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            loadBalancingRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            probes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            inboundNatRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            inboundNatPools: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            outboundNatRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            resourceGuid: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ErrorDetails: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            target: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ErrorModel: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            target: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            details: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            innerError: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AzureAsyncOperationResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            status: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            error: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const EffectiveNetworkSecurityGroupAssociation: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            subnet: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            networkInterface: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const EffectiveNetworkSecurityRule: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourcePortRange: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            destinationPortRange: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourcePortRanges: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            destinationPortRanges: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            sourceAddressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            destinationAddressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceAddressPrefixes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            destinationAddressPrefixes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            expandedSourceAddressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            expandedDestinationAddressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            access: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            priority: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            direction: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const EffectiveNetworkSecurityGroup: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            networkSecurityGroup: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            association: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            effectiveSecurityRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            tagMap: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            element: {
                                required: boolean;
                                serializedName: string;
                                type: {
                                    name: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const EffectiveNetworkSecurityGroupListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const EffectiveRoute: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            source: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            addressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            nextHopIpAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            nextHopType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const EffectiveRouteListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkWatcher: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TopologyParameters: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceGroupName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TopologyAssociation: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            associationType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TopologyResource: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            associations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const Topology: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            createdDateTime: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resources: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const VerificationIPFlowParameters: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            direction: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            localPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            remotePort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            localIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            remoteIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetNicResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VerificationIPFlowResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            access: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ruleName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NextHopParameters: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            destinationIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetNicResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NextHopResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nextHopType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nextHopIpAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routeTableId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SecurityGroupViewParameters: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkInterfaceAssociation: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            securityRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const SubnetAssociation: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            securityRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const SecurityRuleAssociations: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            networkInterfaceAssociation: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            subnetAssociation: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            defaultSecurityRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            effectiveSecurityRules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const SecurityGroupNetworkInterface: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            securityRuleAssociations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const SecurityGroupViewResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            networkInterfaces: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const PacketCaptureStorageLocation: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            storageId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            storagePath: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            filePath: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PacketCaptureFilter: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            protocol: {
                required: boolean;
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
            localIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            remoteIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            localPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            remotePort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PacketCaptureParameters: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            target: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            bytesToCapturePerPacket: {
                required: boolean;
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            totalBytesPerSession: {
                required: boolean;
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeLimitInSeconds: {
                required: boolean;
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            storageLocation: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            filters: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const PacketCapture: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            target: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            bytesToCapturePerPacket: {
                required: boolean;
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            totalBytesPerSession: {
                required: boolean;
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeLimitInSeconds: {
                required: boolean;
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            storageLocation: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            filters: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const PacketCaptureResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            id: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
            target: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            bytesToCapturePerPacket: {
                required: boolean;
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            totalBytesPerSession: {
                required: boolean;
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeLimitInSeconds: {
                required: boolean;
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            storageLocation: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            filters: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PacketCaptureQueryStatusResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            captureStartTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            packetCaptureStatus: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            stopReason: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            packetCaptureError: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const TroubleshootingParameters: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            storageId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            storagePath: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const QueryTroubleshootingParameters: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TroubleshootingRecommendedActions: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            actionId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            actionText: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            actionUri: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            actionUriText: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TroubleshootingDetails: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            reasonType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            summary: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            detail: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            recommendedActions: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const TroubleshootingResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            code: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            results: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const RetentionPolicyParameters: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            days: {
                required: boolean;
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            enabled: {
                required: boolean;
                serializedName: string;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FlowLogStatusParameters: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FlowLogInformation: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            storageId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enabled: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            retentionPolicy: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ConnectivitySource: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            port: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ConnectivityDestination: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            address: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            port: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ConnectivityParameters: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            source: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            destination: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ConnectivityIssue: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            origin: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            severity: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            context: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            value: {
                                required: boolean;
                                serializedName: string;
                                type: {
                                    name: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const ConnectivityHop: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            id: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            address: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceId: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nextHopIds: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            issues: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ConnectivityInformation: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            hops: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            connectionStatus: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            avgLatencyInMs: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            minLatencyInMs: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            maxLatencyInMs: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            probesSent: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            probesFailed: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PatchRouteFilterRule: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            access: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routeFilterRuleType: {
                required: boolean;
                isConstant: boolean;
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
            communities: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const PatchRouteFilter: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            rules: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            peerings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const BGPCommunity: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            serviceSupportedRegion: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            communityName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            communityValue: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            communityPrefixes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            isAuthorizedToUse: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            serviceGroup: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const BgpServiceCommunity: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            serviceName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            bgpCommunities: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const UsageName: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            localizedValue: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const Usage: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            unit: {
                required: boolean;
                isConstant: boolean;
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
            currentValue: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            limit: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkPeering: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            allowVirtualNetworkAccess: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            allowForwardedTraffic: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            allowGatewayTransit: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            useRemoteGateways: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            remoteVirtualNetwork: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            peeringState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AddressSpace: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            addressPrefixes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const DhcpOptions: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            dnsServers: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const VirtualNetwork: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            addressSpace: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dhcpOptions: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            subnets: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            virtualNetworkPeerings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            resourceGuid: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableDdosProtection: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableVmProtection: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const IPAddressAvailabilityResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            available: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            availableIPAddresses: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const VirtualNetworkUsageName: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            localizedValue: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            value: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkUsage: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            currentValue: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            id: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            limit: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            unit: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewayIPConfiguration: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            privateIPAllocationMethod: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            subnet: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            publicIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewaySku: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tier: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            capacity: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VpnClientRootCertificate: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            publicCertData: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VpnClientRevokedCertificate: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            thumbprint: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VpnClientConfiguration: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vpnClientAddressPool: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            vpnClientRootCertificates: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            vpnClientRevokedCertificates: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            vpnClientProtocols: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            radiusServerAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            radiusServerSecret: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const BgpSettings: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            asn: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            bgpPeeringAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            peerWeight: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const BgpPeerStatus: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            localAddress: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            neighbor: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            asn: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            connectedDuration: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routesReceived: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            messagesSent: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            messagesReceived: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const GatewayRoute: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            localAddress: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            network: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nextHop: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourcePeer: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            origin: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            asPath: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            weight: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGateway: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            ipConfigurations: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            gatewayType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vpnType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableBgp: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            activeActive: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            gatewayDefaultSite: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            sku: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            vpnClientConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            bgpSettings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceGuid: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VpnClientParameters: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            processorArchitecture: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            authenticationMethod: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            radiusServerAuthCertificate: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            clientRootCertificates: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const BgpPeerStatusListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const GatewayRouteListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const TunnelConnectionHealth: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            tunnel: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            connectionStatus: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ingressBytesTransferred: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            egressBytesTransferred: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastConnectionEstablishedUtcTime: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LocalNetworkGateway: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            localNetworkAddressSpace: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            gatewayIpAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            bgpSettings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceGuid: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const IpsecPolicy: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            saLifeTimeSeconds: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            saDataSizeKilobytes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipsecEncryption: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipsecIntegrity: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ikeEncryption: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ikeIntegrity: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dhGroup: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            pfsGroup: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewayConnection: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            authorizationKey: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            virtualNetworkGateway1: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            virtualNetworkGateway2: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            localNetworkGateway2: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            connectionType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routingWeight: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sharedKey: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            connectionStatus: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tunnelConnectionStatus: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            egressBytesTransferred: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ingressBytesTransferred: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            peer: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            enableBgp: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            usePolicyBasedTrafficSelectors: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipsecPolicies: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            resourceGuid: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ConnectionResetSharedKey: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            keyLength: {
                required: boolean;
                serializedName: string;
                constraints: {
                    InclusiveMaximum: number;
                    InclusiveMinimum: number;
                };
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ConnectionSharedKey: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkConnectionGatewayReference: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewayConnectionListEntity: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            authorizationKey: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            virtualNetworkGateway1: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            virtualNetworkGateway2: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            localNetworkGateway2: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            connectionType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routingWeight: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sharedKey: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            connectionStatus: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tunnelConnectionStatus: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            egressBytesTransferred: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ingressBytesTransferred: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            peer: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            enableBgp: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            usePolicyBasedTrafficSelectors: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipsecPolicies: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            resourceGuid: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewaysBackendHealthOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewaysBeginBackendHealthOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LoadBalancersGetOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const InboundNatRulesGetOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkInterfacesGetOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkSecurityGroupsGetOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PublicIPAddressesGetOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RouteFiltersGetOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RouteTablesGetOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworksGetOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworksCheckIPAddressAvailabilityOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ipAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SubnetsGetOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewaysResetOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            gatewayVip: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewaysGetBgpPeerStatusOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            peer: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewaysBeginResetOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            gatewayVip: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewaysBeginGetBgpPeerStatusOptionalParams: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            peer: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayAvailableSslPredefinedPolicies: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationSecurityGroupListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const EndpointServicesListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AuthorizationListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitPeeringListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteServiceProviderListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LoadBalancerListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LoadBalancerBackendAddressPoolListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LoadBalancerFrontendIPConfigurationListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const InboundNatRuleListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LoadBalancerLoadBalancingRuleListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkInterfaceListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LoadBalancerProbeListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkInterfaceIPConfigurationListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkInterfaceLoadBalancerListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkSecurityGroupListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SecurityRuleListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkWatcherListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const PacketCaptureListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const PublicIPAddressListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RouteFilterListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RouteFilterRuleListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RouteTableListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RouteListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const BgpServiceCommunityListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const UsagesListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkListUsageResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SubnetListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkPeeringListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewayListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewayListConnectionsResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewayConnectionListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LocalNetworkGatewayListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                required: boolean;
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
