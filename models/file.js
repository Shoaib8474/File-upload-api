module.exports = (sequelize, DataTypes) => {
    const File = sequelize.define('File', {
      filename: {
        type: DataTypes.STRING,
        allowNull: false
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mimetype: {
        type: DataTypes.STRING,
        allowNull: false
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return File;
  };