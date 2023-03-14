{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  name = "node-env";
  buildInputs = with pkgs; [
    nodejs-16_x
    httpie
    lolcat
    # other dependencies
  ];
  shellHook = ''
    clear 
    echo "Welcome to the $(node --version) environment!" | lolcat
    echo "****************************************"
    echo -e "https://nodejs.org/docs/latest-v16.x/api/"
    echo -e "https://nixos.wiki/wiki/Node.js"
    echo -e "https://nixos.wiki/wiki/Development_environment_with_nix-shell#direnv"
    echo "*********************************************************************"
  '';
}
