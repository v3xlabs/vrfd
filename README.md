![](./assets/banner.png)

## How do I get verified?

To get verified simply checkout [vrfd.app](https://vrfd.app/) and type in your [ENS](https://ens.domains/) name. You will be prompted with a simple form, fill it out with as much information as you wish to share. Those responsible for verification will review your case.

## How does it work?

vrfd.eth works using the principle of ENS Subdomains. Anyone can open up a case and request verification. The case will then be reviewed and if approved you will be issued an ENS Subdomain of the name `vrfd.eth`. In example `nick.eth` would be verified using `nick.eth.vrfd.eth`. To check if someone is verified simply check if their `nick.eth` name resolves to the same address as their `nick.eth.vrfd.eth` counterpart.

## Why is there another `.eth` inside of the subdomain?

`vrfd.eth` supports more then just `.eth` names. ENS issues `.eth` names using the `ETHRegistrar` which is an on chain system to permissionlesly issue names. However ENS also supports DNS names using their `DNSSEC` integration. This means that any valid DNS domain (`.com`, `.io`, `.xyz`, `.id`, etc) can be a valid ENS name. This means that for example `luc.computer` would be verified using `luc.computer.vrfd.eth`.
