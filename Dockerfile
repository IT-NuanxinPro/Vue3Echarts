

# 指定基础镜像，必须为第一个命令
# 可以使用镜像ID或者镜像名称 例如 nginx:1.14
# FROM harbor.dcos.ncmp.unicom.local/platpublic/nginx:1.20.1
FROM  harbor.dcos.wuxi.unicom.local/common/nginx:1.20.1
# 维护者信息
MAINTAINER wangjie93
RUN mkdir -p /etc/nginx/logs
# 将本地文件添加到容器中
# 将dist文件中的内容复制到 /usr/local/nginx/html/ 这个目录下面，该路径是nginx容器生成的一个虚拟路径，你的项目会存在这里。
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone
COPY  ./dist /usr/share/nginx/html/government-server/
# /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# 构建镜像时执行的命令
RUN echo 'echo init ok!!'

