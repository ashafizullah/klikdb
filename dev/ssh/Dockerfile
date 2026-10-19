# Bastion for testing SSH tunnels: password and key auth, TCP forwarding on.
FROM alpine:3.20
RUN apk add --no-cache openssh \
 && ssh-keygen -A \
 && adduser -D klikdb && echo 'klikdb:klikdb' | chpasswd \
 && sed -i 's/^#\?AllowTcpForwarding.*/AllowTcpForwarding yes/; s/^#\?PasswordAuthentication.*/PasswordAuthentication yes/' /etc/ssh/sshd_config \
 && mkdir -p /home/klikdb/.ssh
COPY id_ed25519.pub /home/klikdb/.ssh/authorized_keys
RUN chown -R klikdb /home/klikdb/.ssh && chmod 600 /home/klikdb/.ssh/authorized_keys
EXPOSE 22
CMD ["/usr/sbin/sshd", "-D", "-e"]
